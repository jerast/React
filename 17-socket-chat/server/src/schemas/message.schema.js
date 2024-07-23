import { Schema, model } from 'mongoose'

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
  date: {
		type: Date,

		required: true,
	},
  state: {
		type: Boolean,
		default: false,
	},
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.uid = ret._id.toString()
      delete ret._id
      delete ret.__v
      delete ret.password
      return ret
    }
  }
})

export default model('Message', messageSquema)
