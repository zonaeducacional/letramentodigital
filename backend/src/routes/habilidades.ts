import { Router } from 'express'
import { listHabilidades, getHabilidade } from '../controllers/habilidadesController'

const router = Router()

router.get('/', listHabilidades)
router.get('/:id', getHabilidade)

export default router
