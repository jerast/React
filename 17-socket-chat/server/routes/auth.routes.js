import { Router } from 'express'
import { body } from 'express-validator'
import { fieldsValidations } from '../middlewares/fieldsValidations.js'
import { login, renewToken } from '../controllers/auth.controllers.js'
import { validateJWT } from '../jwt/validateJWT.js'

const router = Router()

router.post('/login', 
  [
    body('email', 'email is required').isEmail(),
    body('password', 'password is required').not().isEmpty(),
    fieldsValidations
  ], 
  login
)
router.get('/renew', validateJWT, renewToken)

export default router
