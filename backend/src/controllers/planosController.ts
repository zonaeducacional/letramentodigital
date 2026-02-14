import { Request, Response } from 'express'
import { PrismaClient, Eixo } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const createPlanoSchema = z.object({
    titulo: z.string().min(3),
    descricao: z.string(),
    anoEscolar: z.number(),
    componentes: z.array(z.string()),
    duracao: z.number(),
    objetivos: z.array(z.string()),
    habilidadesIds: z.array(z.string()),
    problematizacao: z.string().optional(),
    desenvolvimento: z.string().optional(),
    producaoAvaliacao: z.string().optional(),
})

export const createPlano = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const userId = req.user.id

        // Parse body
        const data = createPlanoSchema.parse(req.body)
        const { habilidadesIds, ...planoData } = data

        // Fetch skills to infer axes (Eixos)
        const habilidades = await prisma.habilidade.findMany({
            where: {
                id: { in: habilidadesIds }
            }
        })

        // Infer unique axes from selected skills
        const eixosSet = new Set<Eixo>()
        habilidades.forEach(h => eixosSet.add(h.eixo))
        const eixos = Array.from(eixosSet)

        // Create Plan
        const plano = await prisma.planoDidatico.create({
            data: {
                ...planoData,
                autorId: userId,
                eixos: eixos,
                habilidades: {
                    connect: habilidadesIds.map(id => ({ id }))
                }
            },
            include: {
                habilidades: true
            }
        })

        res.status(201).json(plano)
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: error.errors })
        }
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

export const listPlanos = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const userId = req.user.id

        const planos = await prisma.planoDidatico.findMany({
            where: {
                autorId: userId
            },
            include: {
                habilidades: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        res.json(planos)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

export const getPlano = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const plano = await prisma.planoDidatico.findUnique({
            where: { id },
            include: {
                habilidades: true,
                autor: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        })

        if (!plano) {
            return res.status(404).json({ error: 'Plano not found' })
        }

        res.json(plano)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}
