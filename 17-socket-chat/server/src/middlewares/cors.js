import CORS from 'cors'
import { SOCKET_CHAT_CORS } from '../config/env.js'

const ACCEPTED_ORIGINS = SOCKET_CHAT_CORS.split(',')

/**
 * Creates a CORS middleware with specified accepted origins.
 * @function cors
 * @memberof module:Middlewares
 * @param {Object} options - The options object.
 * @param {string[]} [options.acceptedOrigins] - Array of accepted origins.
 * @returns {Function} Express middleware function.
 */
export const cors = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => CORS({
  origin: (origin, callback) => 
    (acceptedOrigins.includes(origin) || !origin) 
      ? callback(null, true) 
      : callback(new Error('Not Allowed by CORS'))
})
