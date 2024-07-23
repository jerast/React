import dotenv from 'dotenv'
import { Server } from '../connection/server.js'

dotenv.config()

new Server().run()

