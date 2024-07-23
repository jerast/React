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

export const verifyJWT = (token) => {
  try {
    const { uid } = jwt.verify( token, SOCKET_CHAT_JWT_SEED )
    return {
      ok: true,
      payload: { uid },
    }
  } 
  catch (error) {
    return {
      ok: false,
      error,
    }
  }
} 