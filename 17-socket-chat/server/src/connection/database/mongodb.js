/** @module connection/mongodb */

import mongoose from 'mongoose'

/**
 * Establishes a connection to the MongoDB database.
 * 
 * @async
 * @function db_connection
 * @memberof module:connection/mongodb
 * @param {string} db_uri - The URI of the MongoDB database to connect to.
 * @throws {Error} Throws an error if the database connection fails.
 * @returns {Promise<void>}
 */
export const db_connection = async (db_uri) => {
  try {
    await mongoose.connect(db_uri)
    console.log('DB connected!')
  } 
  catch (error) {
    console.log(error)
    throw new Error('DB connection failed! See logs.')
  }
}