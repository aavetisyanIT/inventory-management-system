const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
		maxLength: 6,
	},
});

module.exports = mongoose.model('user', userSchema);
