import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface TokenPayload {
    id: string
    role: string
    iat: number
    exp: number
}

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' })
    }

    const [, token] = authHeader.split(' ')

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as TokenPayload

        // @ts-ignore
        req.user = {
            id: decoded.id,
            role: decoded.role
        }

        return next()
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' })
    }
}
