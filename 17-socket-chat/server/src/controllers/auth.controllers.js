/** @module controllers/auth */

import { request, response } from 'express'
import bcrypt from 'bcryptjs'
import User from '../schemas/user.schema.js'
import { generateJWT } from '../jwt/jwt.js'
import { errorResponse } from '../helpers/errorResponse.js'


/**
 * Handles user login. 
 * @async
 * @function login
 * @memberof module:controllers/auth
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Promise<Object>} JSON response with user data and token
 * @throws {@link module:Helpers.errorResponse|error: errorResponse}
 * @see {@link Schema.User} - for User object
 * @auth
 */
export const login = async (req = request, res = response) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email }) // validate email
		if ( !user ) return res.status(404).json({
      ok: false,
      error: 'Email / Password are not correct.',
    })

    const validPassword = bcrypt.compareSync( password, user.password ) // validate password
		if ( !validPassword ) return res.status(404).json({
			ok: false,
			error: 'Email / Password are not correct.',
		})

    const token = await generateJWT(user.toJSON()) // generate token

    return res.json({
      ok: true, 
      user,
      token
    }) 
  } catch (error) { 
    errorResponse(error, res) 
  }
}


/**
 * Renews the user's authentication token.
 * @async
 * @function renewToken
 * @memberof module:controllers/auth
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Promise<Object>} JSON response with user data and new token
 * @throws {@link module:Helpers.errorResponse|error: errorResponse}
 */
export const renewToken = async (req = request, res = response) => {
  const { uid } = req.session

  try {
    const user = await User.findById( uid ) // verify uid

    const newToken = await generateJWT({ uid }) // generate token

    return res.json({
      ok: true,
      user,
      newToken,
    })
  } catch (error) { 
    errorResponse(error, res) 
  }
}