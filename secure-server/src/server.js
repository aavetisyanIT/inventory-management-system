const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');

const privateKey = fs.readFileSync(__dirname + '/../key.pem');
const certificate = fs.readFileSync(__dirname + '/../cert.pem');

const app = express();
app.use(helmet());
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
