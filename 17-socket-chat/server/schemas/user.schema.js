import { Schema, model } from 'mongoose'

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
    default: '/images/user-profile.jpg'
  },
  online: {
		type: Boolean,
		default: false,
	},
}, {
  toJSON: {
    transform: (doc, ret) => {
      ret.uid = ret._id.toString()
      delete ret._id
      delete ret.__v
      delete ret.password
      return ret
    }
  },
  // toObject: {
  //   transform: (doc, ret) => {
  //     ret.uid = ret._id.toString()
  //     delete ret._id
  //     delete ret.__v
  //     return ret
  //   }
  // }
})

export default model('User', userSquema)
