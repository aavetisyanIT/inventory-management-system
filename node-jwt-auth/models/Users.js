const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

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

userSchema.pre('save', function (next) {
	const salt = bcrypt.genSaltSync(10);
	this.password = bcrypt.hashSync(this.password, salt);
	next();
});

module.exports = mongoose.model('user', userSchema);
