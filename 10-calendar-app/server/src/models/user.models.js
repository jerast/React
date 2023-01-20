import { Schema, model } from 'mongoose';

const userSquema = Schema({
	name: {
		type: String,
		require: true,
		trim: true,
	},
	email: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
});

export default model('User', userSquema);