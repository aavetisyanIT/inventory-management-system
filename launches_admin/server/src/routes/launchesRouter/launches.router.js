const express = require('express');
const {
	httpGetAllLaunches,
	httpAddNewLaunch,
	httpDeleteLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.delete('/:launchId', httpDeleteLaunch);

module.exports = launchesRouter;
