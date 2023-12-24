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

app.get('/api/quotes', ({ query }, res) => {
	if (Object.keys(query).length === 0) {
		res.send({ quotes: quotes });
		return;
	}
	const { person } = query;
	if (person) {
		const filteredByAuthorQuotes = quotes.filter(quote => {
			return person === quote.person;
		});
		res.send({ quotes: filteredByAuthorQuotes });
		return;
	}
});

app.post('/api/quotes', ({ query }, res) => {
	const { person, quote } = query;
	if (!person || !quote) {
		res.status(404).send();
		return;
	}
	const newQuote = { quote, person };
	quotes.push({ quote: newQuote });
	res.send({ quote: newQuote });
});

app.listen(PORT, () => {
	console.log('Server is running on port:', PORT);
});
