import { Router } from 'express'
import { createPlano, listPlanos, getPlano } from '../controllers/planosController'
import { authMiddleware } from '../middlewares/authMiddleware'

const router = Router()

router.use(authMiddleware) // Protect all routes

router.post('/', createPlano)
router.get('/', listPlanos)
router.get('/:id', getPlano)

export default router
