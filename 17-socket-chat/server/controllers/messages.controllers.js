import { request, response } from 'express'
import { errorResponse } from '../helpers/errorResponse.js'
import Message from '../schemas/message.schema.js'

export const getMessages = async (req = request, res = response) => {
  const to = req.session.uid
  const from = req.params.from
  
  try {
    const messages = await Message
      .find({ $or: [
          { from, to },
          { from: to, to: from }
        ]})
      .sort({ createdAt: 'desc' })
      .limit(30)

    return res.json({
      ok: true, 
      messages
    })
    
  } catch (error) { 
    // console.log(error)
    errorResponse(error, res) 
  }
}
