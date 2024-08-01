/** @module controllers/messages */

import { request, response } from 'express'
import { errorResponse } from '../helpers/errorResponse.js'
import Message from '../schemas/message.schema.js'


/**
 * Retrieves messages between two users.
 * @async
 * @function getMessages
 * @memberof module:controllers/messages
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Promise<Object>} JSON response with messages
 * @throws {@link module:Helpers.errorResponse|error: errorResponse}
 */
export const getMessages = async (req = request, res = response) => {
  const to = req.session.uid
  const from = req.params.from
  
  try {
    const messages = await Message
      .find({ $or: [
          { from, to },
          { from: to, to: from }
        ]})
      .sort({ createdAt: 'asc' })
      .limit(30)

    return res.json({
      ok: true, 
      messages
    })
    
  } catch (error) { 
    errorResponse(error, res) 
  }
}
