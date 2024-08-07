const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./routes/authRouter');

require('dotenv').config();

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = process.env.DB_CONNECTION_STRING;
mongoose
	.connect(dbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(result => app.listen(3000))
	.catch(err => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRouter);
