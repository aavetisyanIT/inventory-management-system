const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');

const privateKey = fs.readFileSync(__dirname + '/../key.pem');
const certificate = fs.readFileSync(__dirname + '/../cert.pem');

const app = express();

const credentials = { key: privateKey, cert: certificate };

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});
const server = https.createServer(credentials, app);

server.listen(3030, () => console.log('App is serving on port 3030'));
