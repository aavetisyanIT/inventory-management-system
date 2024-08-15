const mongoose = require('mongoose');

const DB_connection_string = process.env.DB_CONNECTION_STRING;

mongoose.connection.once('open', () => console.log('DB is connected'));
mongoose.connection.on('error', err => console.error(err));

async function mongoConnect() {
	await mongoose.connect(DB_connection_string);
}

module.exports = { mongoConnect };
