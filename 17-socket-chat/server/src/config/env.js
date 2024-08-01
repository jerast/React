/**
 * @file env.js
 * @description Provides environment variables for the application.
 */

import dotenv from 'dotenv'

dotenv.config()

/**
 * Server port to use.
 * @constant {number}
 */
export const PORT = process.env.PORT || 8080

/**
 * Flag to disable database connection.
 * @constant {string}
 */
export const SOCKET_CHAT_DB_OFF = process.env.SOCKET_CHAT_DB_OFF

/**
 * JWT seed for token generation and verification.
 * @constant {string}
 */
export const SOCKET_CHAT_JWT_SEED = process.env.SOCKET_CHAT_JWT_SEED


/**
 * CORS settings for Socket.IO.
 * @constant {string}
 */
export const SOCKET_CHAT_CORS = process.env.SOCKET_CHAT_CORS