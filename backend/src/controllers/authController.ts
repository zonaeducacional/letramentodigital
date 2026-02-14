import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { z } from 'zod'

const prisma = new PrismaClient()

// Validation Schemas
const registerSchema = z.object({
    email: z.string().email(),
    name: z.string().min(2),
    password: z.string().min(6),
    role: z.enum(['TEACHER', 'COORDINATOR']).optional()
})

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const register = async (req: Request, res: Response) => {
    try {
        const { email, name, password, role } = registerSchema.parse(req.body)

        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
                role: role || 'TEACHER',
                components: [],
                yearsTeaching: []
            }
        })

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET as string,
            { expiresIn: '7d' }
        )

        // Remove password from response
        const { password: _, ...userWithoutPassword } = user

        res.status(201).json({
            user: userWithoutPassword,
            token
        })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: error.errors })
        }
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = loginSchema.parse(req.body)

        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET as string,
            { expiresIn: '7d' }
        )

        const { password: _, ...userWithoutPassword } = user

        res.json({
            user: userWithoutPassword,
            token
        })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: error.errors })
        }
        res.status(500).json({ error: 'Internal server error' })
    }
}

export const getMe = async (req: Request, res: Response) => {
    try {
        // @ts-ignore - user is added by auth middleware
        const userId = req.user.id

        const user = await prisma.user.findUnique({
            where: { id: userId }
        })

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        const { password: _, ...userWithoutPassword } = user
        res.json(userWithoutPassword)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}
