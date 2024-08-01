/** @module Routes/messages */

import { Router } from 'express'
import { getMessages } from '../controllers/messages.controllers.js'
import { validateToken } from '../middlewares/validateToken.js'

const router = Router()

/**
 * Get all messages between users.
 * @name get/:from
 * @path {POST} /api/messages/:from
 * @params :from is the otherside-user uid indentifier
 * @chain {@link module:Middlewares.validateToken|middleware: validateToken}
 * @chain {@link module:controllers/messages.getMessages|controller: getMessages}
 */
router.get('/:from', validateToken, getMessages)

export default router
