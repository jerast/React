import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 8080
export const SOCKET_CHAT_DB_OFF = process.env.SOCKET_CHAT_DB_OFF
export const SOCKET_CHAT_JWT_SEED = process.env.SOCKET_CHAT_JWT_SEED
export const SOCKET_CHAT_CORS = process.env.SOCKET_CHAT_CORS