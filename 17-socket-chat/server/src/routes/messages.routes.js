import { Router } from 'express'
import { getMessages } from '../controllers/messages.controllers.js'
import { validateToken } from '../middlewares/validateToken.js'

const router = Router()

router.get('/:from', validateToken, getMessages)

export default router
