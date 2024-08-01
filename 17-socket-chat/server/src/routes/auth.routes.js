/** @module Routes/auth */

import { Router } from 'express'
import { body } from 'express-validator'
import { fieldsValidations } from '../middlewares/fieldsValidations.js'
import { login, renewToken } from '../controllers/auth.controllers.js'
import { validateToken } from '../middlewares/validateToken.js'

const router = Router()

/**
 * User login.
 * @name login
 * @path {POST} /api/auth/login
 * @body {string} email
 * @body {string} password
 * @code {200} Request is success 
 * @code {400} Body fields are not filled correctly 
 * @code {500} Server fails
 * @chain {@link module:Middlewares.fieldsValidations|middleware: fieldsValidations}
 * @chain {@link module:Middlewares.validateToken|middleware: validateToken}
 * @chain {@link module:controllers/auth.login|controller: login}
 */
router.post('/login', 
  [
    body('email', 'email is required').isEmail(),
    body('password', 'password is required').not().isEmpty(),
    fieldsValidations
  ], 
  login
)

/**
 * User session token renew.
 * @name post/renew
 * @path {POST} /api/auth/renew
 * @header {string} x-token
 * @code {200} Request is success 
 * @code {400} Body fields are not filled correctly 
 * @code {500} Server fails
 * @chain {@link module:Middlewares.validateToken|middleware: validateToken}
 * @chain {@link module:controllers/auth.renewToken|controller: renewToken}
 */
router.get('/renew', validateToken, renewToken)

export default router
