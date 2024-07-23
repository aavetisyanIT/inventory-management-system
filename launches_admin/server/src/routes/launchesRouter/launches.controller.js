const {
	getAllLaunches,
	scheduleNewLaunch,
	abortLaunchById,
	getLaunchById,
} = require('../../models/launches.model');

const { getPagination } = require('../../services/query');

async function httpGetAllLaunches(req, res) {
	const { skip, limit } = getPagination(req.query);
	const launches = await getAllLaunches(skip, limit);
	return res.status(200).json(launches);
}

async function httpAddNewLaunch(req, res) {
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

	await scheduleNewLaunch(launch);

	return res.status(201).json(launch);
}

async function httpDeleteLaunch(req, res) {
	const { launchId } = req.params;

	const abortedLaunch = await getLaunchById(Number(launchId));
	if (abortedLaunch) {
		await abortLaunchById(Number(launchId));
		return res.status(200).json(abortedLaunch);
	}
	res.status(400).json({
		error: 'Launch Not Found',
	});
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch, httpDeleteLaunch };
