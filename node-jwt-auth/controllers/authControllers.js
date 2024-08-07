const Users = require('../models/Users');

function handleErrors(err) {
	const errors = { email: '', password: '' };
	if (err.code) {
		errors.email = 'This email already registered';
		return errors;
	}
	if (err.message.includes('user validation failed')) {
		Object.values(err.errors).forEach(errObj => {
			const { properties } = errObj;
			errors[properties.path] = properties.message;
		});
	}

	return errors;
}

module.exports.login_get = (req, res) => {
	res.render('login');
};

module.exports.login_post = (req, res) => {
	res.json('Login');
};

module.exports.signup_get = (req, res) => {
	res.render('signup');
};
module.exports.signup_post = async (req, res) => {
	const { email, password } = req.body;
	try {
		const newUser = await Users.create({ email, password });
		res.status(201).json(newUser);
	} catch (err) {
		const errors = handleErrors(err);
		res.status(404).json({ errors });
	}
};
