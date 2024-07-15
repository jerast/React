import { Router } from 'express'
import { getMessages } from '../controllers/messages.controllers.js'
import { validateJWT } from '../jwt/validateJWT.js'

const router = Router()

router.get('/:from', validateJWT, getMessages)

export default router
