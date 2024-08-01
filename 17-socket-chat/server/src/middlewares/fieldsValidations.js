import { validationResult } from 'express-validator'

/**
 * Middleware to validate fields using express-validator.
 * @function fieldsValidations
 * @memberof module:Middlewares
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void}
 */
export const fieldsValidations = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty())
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  
  next()
}