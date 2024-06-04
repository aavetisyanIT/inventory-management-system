const http = require('http');
const app = require('./app');
const { mongoConnect } = require('./services/mongo');

const { loadPlanets } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;
const services = 'test';

const server = http.createServer(app);

async function startServer() {
	await mongoConnect();
	await loadPlanets();
	server.listen(PORT, () => console.log(`Server is listening on ${PORT}...`));
}

startServer();
