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
		function (accessToken, refreshToken, profile, cb) {
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

app.get('/auth/google', (req, res) => {});
app.get('/auth/google/callback', (req, res) => {});
app.get('/auth/logout', (req, res) => {});

app.get('/secret', function (req, res) {
	res.status(200).send('Your secret is 43!');
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

const server = https.createServer(credentials, app);

server.listen(8080, () => console.log('App is serving on port 8080'));
