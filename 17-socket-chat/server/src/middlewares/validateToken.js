import { verifyJWT } from '../jwt/jwt.js'

/**
 * Middleware to validate JWT token.
 * @function validateToken
 * @memberof module:Middlewares
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void}
 * @see {@link module:jwt.verifyJWT|jwt: verifyJWT}
 */
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