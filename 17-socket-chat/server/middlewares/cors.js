import CORS from 'cors'
import { SOCKET_CHAT_CORS } from '../server/config.js'

const ACCEPTED_ORIGINS = SOCKET_CHAT_CORS.split(',')

export const cors = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => CORS({
  origin: (origin, callback) => 
    (acceptedOrigins.includes(origin) || !origin) 
      ? callback(null, true) 
      : callback(new Error('Not Allowed by CORS'))
})