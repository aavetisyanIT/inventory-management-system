const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
const passport = require('passport');
const Strategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

const privateKey = fs.readFileSync(__dirname + '/../key.pem');
const certificate = fs.readFileSync(__dirname + '/../cert.pem');

const config = {
	SECRET_ID: process.env.SECRET_ID,
	SECRET_KEY: process.env.SECRET_KEY,
};

passport.use(
	new Strategy(
		{
			clientID: config.SECRET_ID,
			clientSecret: config.SECRET_KEY,
			callbackURL: '/auth/google/callback',
		},
		function (accessToken, refreshToken, profile, done) {
			console.log('Auth profile', profile);
			return done(null, profile);
		},
	),
);

const app = express();

app.use(helmet());
app.use(passport.initialize());

const credentials = { key: privateKey, cert: certificate };

function checkIsLoggedIn(req, res, next) {
	const isLoggedIn = true;
	if (!isLoggedIn) {
		res.status(400).send({
			error: 'You are not logged in',
		});
	}
	next();
}

app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['email', 'profile'],
	}),
	(req, res) => {
		console.log('AAA /auth/google');
	},
);
app.get(
	'/auth/google/callback',
	passport.authenticate('google', {
		failureRedirect: '/failure',
		successRedirect: '/',
		session: false,
	}),
	(req, res) => {
		console.log('AAA /auth/google/callback');
	},
);
app.get('/auth/logout', (req, res) => {});

app.get('/secret', function (req, res) {
	res.status(200).send('Your secret is 43!');
});

app.get('/failure', (req, res) => {
	console.log('AAA /failure');
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

const server = https.createServer(credentials, app);

server.listen(3000, () => console.log('App is serving on port 3000'));
