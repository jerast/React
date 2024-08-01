import { Schema, model } from 'mongoose'

/**
 * Message Schema definition
 * @name Schema.Message
 * @class
 * @property {Schema.Types.ObjectId} from - User ID of the sender
 * @property {Schema.Types.ObjectId} to - User ID of the receiver
 * @property {string} content - Content of the message
 */
const messageSquema = Schema({
	from: {
		type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
	},
	to: {
		type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
	},
  content: {
		type: String,
		required: true,
	},
}, {
  /**
   * @description Adds timestamp props in MongoDB new records
   * @name Schema.Message.timestamps
   * @private
   * @prop {Date} createdAt - created record date
   * @prop {Date} updatedAt - last update date
   */
  timestamps: true,

  /**
   * User JSON representation. Used for API responses.
   * Removes props: 
   *    -  _id 
   *    -  __v 
   * @name Schema.Message.toJSON
   * @method 
   * @returns {JSON}
   * @prop {string} uid - MongoDB '_id' string
   */
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id.toString()
      ret.from = ret.from.toString()
      ret.to = ret.to.toString()
      delete ret._id
      delete ret.__v
      return ret
    }
  },

  /**
   * User Javascript Object representation, used for logical operations and manipulations.
   * Removes props: 
   *    -  _id 
   *    -  __v 
   * @name Schema.User.toObject
   * @method 
   * @returns {Object}
   * @prop {string} uid - MongoDB '_id' string
   * @prop {string} password - Hashed password
   */
  toObject: {
    transform: (doc, ret) => {
      ret.id = ret._id.toString()
      ret.from = ret.from.toString()
      ret.to = ret.to.toString()
      delete ret._id
      delete ret.__v
      return ret
    }
  }
})

export default model('Message', messageSquema)
