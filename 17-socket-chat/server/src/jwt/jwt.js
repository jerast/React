import jwt from 'jsonwebtoken'
import { SOCKET_CHAT_JWT_SEED } from '../config/env.js'

/**
 * Generates a JWT token.
 * @function generateJWT
 * @memberof module:jwt
 * @param {Object} payload - The payload to be encoded in the token
 * @param {string} payload.uid - User ID to be included in the token
 * @returns {Promise<string>} A promise that resolves with the generated token
 */
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

/**
 * Verifies a JWT token.
 * @function verifyJWT
 * @memberof module:jwt
 * @param {string} token - The token to be verified
 * @returns {Object} An object indicating whether the verification was successful
 * @property {boolean} ok - Indicates if the verification was successful
 * @property {Object} [payload] - The decoded payload if verification was successful
 * @property {string} payload.uid - The user ID from the token
 * @property {Error} [error] - The error object if verification failed
 */
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