import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const listHabilidades = async (req: Request, res: Response) => {
    try {
        const { ano, componente, eixo } = req.query

        const where: any = {}

        if (ano) {
            where.anoEscolar = Number(ano)
        }

        if (componente) {
            where.componente = {
                contains: String(componente),
                mode: 'insensitive'
            }
        }

        if (eixo) {
            where.eixo = String(eixo)
        }

        const habilidades = await prisma.habilidade.findMany({
            where,
            orderBy: {
                codigo: 'asc'
            }
        })

        res.json(habilidades)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

export const getHabilidade = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const habilidade = await prisma.habilidade.findUnique({
            where: { id }
        })

        if (!habilidade) {
            return res.status(404).json({ error: 'Habilidade not found' })
        }

        res.json(habilidade)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}
