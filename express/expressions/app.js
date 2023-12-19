const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;

app.get('/expressions', (req, res, next) => {
	res.send(expressions);
});

// Add a new call to app.get('/expressions/:id') here
app.get('/expressions/:id', (req, res, next) => {
	const id = req.params.id;
	const element = getElementById(id, expressions);
	if (element) return res.send(element);
	res.send('Wrong id!');
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
