const Users = require('../models/Users');

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
		console.log('User is not created. Error:', err);
		res.status(404).json('User is not created');
	}
};
