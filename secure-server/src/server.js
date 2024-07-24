const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});
const server = http.createServer(app);

server.listen(3030, () => console.log('App is serving on port 3030'));
