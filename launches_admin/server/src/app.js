const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const api = require('./routes/api');

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('short'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.all('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use('/v1', api);

module.exports = app;
