const {
	getAllLaunches,
	addNewLaunch,
	abortLaunchById,
	getLaunchById,
} = require('../../models/launches.model');

async function httpGetAllLaunches(req, res) {
	return res.status(200).json(await getAllLaunches());
}

function httpAddNewLaunch(req, res) {
	const launch = req.body;
	const { mission, rocket, launchDate, target } = launch;

	if (!mission || !rocket || !launchDate || !target) {
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

function httpDeleteLaunch(req, res) {
	const { launchId } = req.params;

	const abortedLaunch = getLaunchById(Number(launchId));
	if (abortedLaunch) {
		abortLaunchById(Number(launchId));
		return res.status(200).json(abortedLaunch);
	}
	res.status(400).json({
		error: 'Launch Not Found',
	});
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch, httpDeleteLaunch };
