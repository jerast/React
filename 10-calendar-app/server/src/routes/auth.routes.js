import { Router } from 'express';
import { check } from 'express-validator';
import { validateRequest } from '../middlewares/validate_request.js';
import { validateJWT } from '../middlewares/validate_jwt.js';
import { createUser, loginUser, revalidateJWT } from '../controllers/auth.controllers.js';

const router = Router();

const valid = {
   name: check('name', 'el nombre es obligatorio').not().isEmpty(),
   email: check('email', 'el email es obligatorio').isEmail(),
   password: check('password', 'el password debe de tener 6 o más caracteres').isLength({ min: 6 }),
}

router.post( 
   '/new', 
   [ 
      valid.name, 
      valid.email,
      valid.password,
      validateRequest
   ], 
   createUser, 
);
router.post( 
   '/',
   [
      valid.email,
      valid.password,
      validateRequest,
   ],
   loginUser, 
);
router.get( '/renew', validateJWT, revalidateJWT );

export default router;