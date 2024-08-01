/** @module Routes/users */

import { Router } from 'express'
import { body } from 'express-validator'
import { fieldsValidations } from '../middlewares/fieldsValidations.js'
import { createUser } from '../controllers/users.controllers.js'

const router = Router()

/**
 * Creates a new user.
 * @name post/new
 * @path {POST} /api/users/new
 * @body {string} name
 * @body {string} email
 * @body {string} password
 * @chain {@link module:Middlewares.fieldsValidations|middleware: fieldsValidations}
 * @chain {@link module:controllers/users.createUser|controller: createUser}
 */
router.post('/new', 
  [
    body('name', 'name is required').not().isEmpty(),
    body('email', 'email is required').isEmail(),
    body('password', 'password is required').not().isEmpty(),
    fieldsValidations
  ]
, createUser)

export default router
