const express = require('express');

const planetsRouter = require('./planetsRouter/planets.router');
const launchesRouter = require('./launchesRouter/launches.router');

const api = express.Router();

api.use('/planets', planetsRouter);
api.use('/launches', launchesRouter);

module.exports = api;
