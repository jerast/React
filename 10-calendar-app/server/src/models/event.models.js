import { Schema, model } from 'mongoose';

const eventSquema = Schema({
	title: {
		type: String,
		required: true,
	},
	notes: {
		type: String,
	},
	start: {
		type: Date,
		required: true,
	},
	end: {
		type: Date,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

eventSquema.method('toJSON', function() {
	const {__v, _id, ...object} = this.toObject();
	return { id: _id, ...object };
});

export default model('Event', eventSquema);
