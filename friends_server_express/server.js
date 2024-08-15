const express = require('express');

const friendsRoute = require('./routes/friends.route');

const PORT = 3000;

const app = express();

app.use(function (req, res, next) {
	const start = Date.now();
	next();
	console.log(`${req.method} ${req.url} ${Date.now() - start}`);
});

app.use('/friends', friendsRoute);

app.listen(PORT, () => console.log('Express in running on ', PORT));
