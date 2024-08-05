const { Router } = require('express');
const {
	login_get,
	login_post,
	signup_get,
	signup_post,
} = require('../controllers/authControllers');

const routes = Router();

routes.get('/signup', signup_get);
routes.post('/signup', signup_post);
routes.get('/login', login_get);
routes.post('/login', login_post);

module.exports = routes;
