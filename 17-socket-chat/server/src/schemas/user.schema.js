import { Schema, model } from 'mongoose'

/**
 * User Schema definition
 * @name Schema.User
 * @class
 * @prop {string} name - User's name
 * @prop {string} email - User's email - Unique
 * @prop {string} password - User's password
 * @prop {string} [picture=null] - User's profile picture URL
 * @prop {boolean} [online=false] - User's online state
 */
const userSquema = Schema({
	name: {
		type: String,
    required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
  password: {
		type: String,
		required: true,
	},
  picture: {
    type: String,
    default: null
  },
  online: {
		type: Boolean,
		default: false,
	},
}, {
  /**
   * User JSON representation, used for API responses.
   * Removes props: 
   *    -  _id 
   *    -  __v 
   *    -  password
   * @name Schema.User.toJSON
   * @method 
   * @returns {JSON}
   * @prop {string} uid - MongoDB '_id' string
   */
  toJSON: {
    transform: (doc, ret) => {
      ret.uid = ret._id.toString()
      delete ret._id
      delete ret.__v
      delete ret.password
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
      ret.uid = ret._id.toString()
      delete ret._id
      delete ret.__v
      return ret
    }
  }
})

export default model('User', userSquema)
