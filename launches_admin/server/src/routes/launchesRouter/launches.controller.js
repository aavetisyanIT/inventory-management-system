const { getAllLaunches, addNewLaunch } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
	return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
	const launch = req.body;
	const { mission, rocket, launchDate, destination } = launch;

	if (!mission || !rocket || !launchDate || !destination) {
		return res.status(400).json({
			error: 'Invalid body request',
		});
	}

	launch.launchDate = new Date(launch.launchDate);

	if (isNaN(launch.launchDate)) {
		return res.status(400).json({
			error: 'Request has invalid launchDate',
		});
	}

	addNewLaunch(launch);

	return res.status(201).json(launch);
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch };
