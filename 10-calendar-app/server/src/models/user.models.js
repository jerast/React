import { Schema, model } from 'mongoose';

const userSquema = Schema({
	name: {
		type: String,
		required: true,
		trim: true,
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
});

userSquema.method('toJSON', function() {
	const {__v, _id, ...object} = this.toObject();
	return { id: _id, ...object };
});

export default model('User', userSquema);