const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const {
	getElementById,
	getIndexById,
	updateElement,
	seedElements,
} = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;

app.get('/expressions', (req, res, next) => {
	res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
	const { id } = req.params;
	const foundExpression = getElementById(id, expressions);
	const index = getIndexById(id, expressions);
	if (foundExpression) {
		res.send(foundExpression);
	} else {
		res.status(404).send();
	}
});

app.put('/expressions/:id', (req, res, next) => {
	const { id } = req.params;
	const index = getIndexById(id, expressions);
	if (index === -1) return res.status(404).send('ID is invalid!');
	const updatedElement = updateElement(id, req.query, expressions);
	res.send(updatedElement);
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
