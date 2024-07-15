import { Router } from 'express'
import { body } from 'express-validator'
import { fieldsValidations } from '../middlewares/fieldsValidations.js'
import { createUser } from '../controllers/users.controllers.js'

const router = Router()

router.post('/new', 
  [
    body('name', 'name is required').not().isEmpty(),
    body('email', 'email is required').isEmail(),
    body('password', 'password is required').not().isEmpty(),
    fieldsValidations
  ]
, createUser)

export default router
