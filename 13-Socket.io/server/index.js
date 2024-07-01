import dotenv from 'dotenv'
import { Server } from '../models/server.js'

dotenv.config()

new Server().run()

