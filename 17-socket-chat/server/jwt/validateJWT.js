import jwt from 'jsonwebtoken'
import { SOCKET_CHAT_JWT_SEED } from '../server/config.js'

export const validateJWT = (req, res, next) => {
  const token = req.header('x-token')

  if ( !token ) return res.status(401).json({
    ok: false,
    message: 'No token on request',
  })

  try {
    const { uid } = jwt.verify(
      token, 
      SOCKET_CHAT_JWT_SEED
    )

    req.session = { uid }
    return next()
  } 
  catch (error) {
    return res.status(401).json({
      ok: false,
      message: 'Invalid token'
    })
  }
}