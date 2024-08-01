/**
 * @file index.js
 * @description Main entry point of the application.
 */

import { Server } from './connection/server.js'

/**
 * Initializes and runs the server.
 */
new Server().run()
