import { verifyJWT } from '../jwt/jwt.js'

export const validateToken = (req, res, next) => {
  const token = req.header('x-token')

  if ( !token ) return res.status(401).json({
    ok: false,
    error: 'No token on request',
  })

  const tokenVerify = verifyJWT(token)
  
  if (!tokenVerify.ok) return res.status(401).json({
    ok: false,
    error: 'Invalid token'
  })
  
  req.session = tokenVerify.payload
  return next()
}