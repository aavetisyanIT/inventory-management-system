const http = require('http');

const PORT = 3000;

const friends = [
	{ id: 0, name: 'Nikola Tesla' },
	{ id: 1, name: 'Sir Isaac Newton' },
];

const server = http.createServer((req, res) => {
	const urlArr = req.url.split('/');
	if (urlArr[1] === 'friends') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		if (urlArr.length === 3) {
			const friendIndex = +urlArr[2];
			res.end(JSON.stringify(friends[friendIndex]));
			return;
		}
		res.end(JSON.stringify(friends));
	} else if (urlArr[1] === 'messages') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<body>');
		res.write('<h1>Messages</h1>');
		res.write('</html>');
		res.write('</body>');
		res.end();
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
