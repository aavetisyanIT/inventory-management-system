const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const {
	getElementById,
	getIndexById,
	updateElement,
	seedElements,
	createElement,
} = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');
const animals = [];
seedElements(animals, 'animals');

const PORT = process.env.PORT || 4001;

app.get('/expressions', (req, res, next) => {
	res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
	const foundExpression = getElementById(req.params.id, expressions);
	if (foundExpression) {
		res.send(foundExpression);
	} else {
		res.status(404).send();
	}
});

app.put('/expressions/:id', (req, res, next) => {
	const expressionIndex = getIndexById(req.params.id, expressions);
	if (expressionIndex !== -1) {
		updateElement(req.params.id, req.query, expressions);
		res.send(expressions[expressionIndex]);
	} else {
		res.status(404).send();
	}
});

app.post('/expressions', (req, res, next) => {
	const receivedExpression = createElement('expressions', req.query);
	if (receivedExpression) {
		expressions.push(receivedExpression);
		res.status(201).send(receivedExpression);
	} else {
		res.status(400).send();
	}
});

app.delete('/expressions/:id', (req, res, next) => {
	const expressionIndex = getIndexById(req.params.id, expressions);
	if (expressionIndex !== -1) {
		expressions.splice(expressionIndex, 1);
		res.status(204).send();
	} else {
		res.status(404).send();
	}
});

app.get('/animals', (req, res, next) => {
	res.status(200).send(animals);
});

app.get('/animals/:id', (req, res, next) => {
	const animal = getElementById(req.params.id, animals);
	if (animal) {
		res.send(animal);
		return;
	}
	res.status(404).send('Error');
});

app.put('/animals/:id', (req, res, next) => {
	const animalIndex = getIndexById(req.params.id, animals);
	if (animalIndex !== -1) {
		updateElement(req.params.id, req.query, animals);
		res.send(animals[animalIndex]);
		return;
	}
	res.status(404).send('Error');
});

app.post('/animals', ({ query }, res, next) => {
	const newAnimal = createElement('animals', query);
	if (newAnimal) {
		animals.push(newAnimal);
		res.status(201).send(newAnimal);
		return;
	}
	return res.status(400).send();
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
