const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const { loadPlanets } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;
const DB_connection_string = process.env.DB_CONNECTION_STRING;

const server = http.createServer(app);

mongoose.connection.once('open', () => console.log('DB is connected'));
mongoose.connection.on('error', err => console.error(err));

async function startServer() {
	await mongoose.connect(DB_connection_string);
	await loadPlanets();
	server.listen(PORT, () => console.log(`Server is listening on ${PORT}...`));
}

startServer();
