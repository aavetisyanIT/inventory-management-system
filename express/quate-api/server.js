const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (_, res) => {
	const randomQuote = getRandomElement(quotes);
	if (randomQuote) {
		res.send({ quote: randomQuote });
		return;
	}
	res.status(404).send('Error');
});

app.listen(PORT, () => {
	console.log('Server is running on port:', PORT);
});
