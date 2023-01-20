import jwt from "jsonwebtoken";
import { SECRET_JWT_SEED } from "../config.js";

export const validateJWT = (request, response, next) => {
   const token = request.header('x-token');

   if ( !token ) {
      return response.status(401).json({
         ok: false,
         message: 'There is no token on request',
      });
   }

   try {

      const { uid, name } = jwt.verify(
         token, 
         SECRET_JWT_SEED
      );

      request.uid = uid;
      request.name = name;
      
   } catch (error) { 
      return response.status(401).json({
         ok: false,
         message: 'Invalid token',
      });
   }

   next();
}