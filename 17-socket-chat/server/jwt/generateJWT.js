import jwt from 'jsonwebtoken'
import { SOCKET_CHAT_JWT_SEED } from '../server/config.js'

export const generateJWT = ({ uid }) => 
  new Promise((resolve, reject) => {
    const payload = { uid }
    const options = { expiresIn: '24h' }

    jwt.sign(
      payload,
      SOCKET_CHAT_JWT_SEED,
      options,
      (error, token) => {
        error 
          ? reject('Could not generate token')
          : resolve(token)
      }
    )
  })