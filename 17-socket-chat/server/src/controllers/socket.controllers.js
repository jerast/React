/** @module controllers/socket */

import User from '../schemas/user.schema.js'
import Message from '../schemas/message.schema.js'


/**
 * Updates user status to online when connected.
 * @async
 * @function userConnect
 * @memberof module:controllers/socket
 * @param {string} uid - User ID
 * @returns {Promise<Object>} Object indicating success and user data
 */
export const userConnect = async (uid) => {
  try {
    const user = await User.findById(uid)
    
    user.online = true
    await user.save()
    
    return {
      ok: true, 
      user,
    }
  } catch (error) {
    return {
      ok: false, 
      error,
    }
  }
}


/**
 * Updates user status to offline when disconnected.
 * @async
 * @function userDisconnect
 * @memberof module:controllers/socket
 * @param {string} uid - User ID
 * @returns {Promise<Object>} Object indicating success and user data
 */
export const userDisconnect = async (uid) => {
  try {
    const user = await User.findById(uid)
    
    user.online = false
    await user.save()
    
    return {
      ok: true,
      user,
    }
  } catch (error) {
    return {
      ok: false, 
      error,
    }
  }
}


/**
 * Retrieves all users.
 * @async
 * @function getUsers
 * @memberof module:controllers/socket
 * @returns {Promise<Object>} Object containing all users
 */
export const getUsers = async () => {
  try {
    const users = await User.find().sort()
    
    return {
      ok: true,
      users,
    }
  } catch (error) {
    return {
      ok: false, 
      error,
    }
  }
}


/**
 * Updates user status to offline when disconnected.
 * @async
 * @function saveMessage
 * @memberof module:controllers/socket
 * @param {Object} messagePayload
 * @param {string} messagePayload.from - Sender user uid
 * @param {string} messagePayload.to - Receiver user uid
 * @param {string} messagePayload.content - Message content
 * @returns {Promise<Object>} Object indicating success and saved message
 */
export const saveMessage = async (messagePayload) => {
  try {
    const newMessage = new Message(messagePayload)
    await newMessage.save()
    
    return newMessage.toJSON()
  } catch (error) {
    return {
      ok: false, 
      error,
    }
  }
}
