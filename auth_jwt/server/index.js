require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors);
app.use(cookieParser);

const start = async () => {
	try {
		mongoose.connection.once('open', () => {
			console.log('MongoDB connection is ready');
		});
		mongoose.connection.on('error', error => {
			console.error(error);
		});
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		mongoose.connection.on('connected', () => {
			console.log('Connected to MongoDB');
		});
		app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();
