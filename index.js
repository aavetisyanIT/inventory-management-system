import express from 'express';
import cluster from 'cluster';

if (cluster.isPrimary) {
	cluster.fork();
} else {
	const app = express();

	const port = 3000;

	function doWork(duration) {
		const start = Date.now();
		while (Date.now() - start < duration) {}
	}

	app.get('/', (req, res) => {
		doWork(3000);
		res.send('Hi there');
	});

	app.listen(port);
}
