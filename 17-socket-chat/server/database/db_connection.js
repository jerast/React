import mongoose from 'mongoose';
import { SOCKET_CHAT_DB_OFF } from '../server/config.js';

export const db_connection = async () => {
  try {
    await mongoose.connect(SOCKET_CHAT_DB_OFF)
    console.log('DB connected!')
  } 
  catch (error) {
    console.log(error)
    throw new Error('DB connection failed! See logs.')
  }
}