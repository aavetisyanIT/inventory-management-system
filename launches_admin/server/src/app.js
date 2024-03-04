const path = require('path');
const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planetsRouter/planets.router');

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use(planetsRouter);

module.exports = app;
