const express = require('express');
const {
	getFriends,
	getFriendById,
} = require('./controllers/friends.controller');

const PORT = 3000;

const app = express();

app.use(function (req, res, next) {
	const start = Date.now();
	next();
	console.log(`${req.method} ${req.url} ${Date.now() - start}`);
});

app.get('/friends', getFriends);
app.get('/friends/:id', getFriendById);

app.listen(PORT, () => console.log('Express in running on ', PORT));
