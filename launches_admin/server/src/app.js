const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planetsRouter/planets.router');
const launchesRouter = require('./routes/launchesRouter/launches.router');

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('short'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.all('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

module.exports = app;
