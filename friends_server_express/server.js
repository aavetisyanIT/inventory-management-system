const express = require('express');

const PORT = 3000;

const app = express();

app.use(function (req, res, next) {
	const start = Date.now();
	next();
	console.log(`${req.method} ${req.url} ${Date.now() - start}`);
});

const friends = [
	{ id: 0, name: 'Nikola Tesla' },
	{ id: 1, name: 'Sir Isaac Newton' },
];

app.get('/friends', (req, res) => {
	res.json(friends);
});

app.get('/friends/:id', (req, res) => {
	const friendId = Number(req.params.id);
	const friend = friends[friendId];
	if (!friend) {
		return res.status(404).send({
			error: 'Invalid friend id',
		});
	}
	res.json(friend);
});

app.listen(PORT, () => console.log('Express in running on ', PORT));
