const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Email is required'],
		unique: true,
		lowercase: true,
		validate: [isEmail, 'Please, enter a valid email'],
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
		minlength: [6, 'Password must be at list 6 characters'],
	},
});

module.exports = mongoose.model('user', userSchema);
