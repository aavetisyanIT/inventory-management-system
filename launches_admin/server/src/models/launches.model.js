const axios = require('axios');

const LaunchModel = require('./launches.mongo.model');
const PlanetModel = require('./planets.mongo.model');

const DEFAULT_FLIGHT_NUMBER = 100;

const SPACE_X_URL = 'https://api.spacexdata.com/v4/launches/query';

async function findLaunch(filter) {
	return await LaunchModel.findOne(filter);
}

async function populateLaunches() {
	const response = await axios.post(SPACE_X_URL, {
		query: {},
		options: {
			pagination: false,
			populate: [
				{
					path: 'rocket',
					select: {
						name: 1,
					},
				},
				{
					path: 'payloads',
					select: {
						customers: 1,
					},
				},
			],
		},
	});

	if (response.status !== 200) {
		console.log('Error getting launches data');
		console.log(response.status);
		throw new Error('Error getting launches data');
	}

	const launchDocs = response.data.docs;
	for (let launchDoc of launchDocs) {
		const customers = launchDoc['payloads'].flatMap(customer => {
			return customer.customers;
		});

		const launch = {
			flightNumber: launchDoc['flight_number'],
			mission: launchDoc['name'],
			rocket: launchDoc['rocket']['name'],
			launchDate: launchDoc['date_local'],
			target: 'N/A',
			customers,
			upcoming: launchDoc['upcoming'],
			success: launchDoc['success'],
		};

		await saveLaunch(launch);
	}
}

async function loadLaunchesData() {
	const firstLaunch = await findLaunch({
		flightNumber: 1,
		rocket: 'Falcon 1',
		mission: 'FalconSat',
	});
	if (firstLaunch) {
		console.log('Launches data is already populated!');
		return;
	}
	await populateLaunches();
}

async function saveLaunch(launch) {
	await LaunchModel.findOneAndUpdate(
		{ flightNumber: launch.flightNumber },
		launch,
		{
			upsert: true,
		},
	);
}

async function getLatestFlightNumber() {
	const latestFlight = await LaunchModel.findOne().sort('-flightNumber');
	if (!latestFlight) return DEFAULT_FLIGHT_NUMBER;
	return latestFlight.flightNumber;
}

async function getAllLaunches(skip, limit) {
	return await LaunchModel.find({}, { _id: 0, __v: 0 })
		.sort({ flightNumber: 1 })
		.skip(skip)
		.limit(limit);
}

async function getLaunchById(id) {
	return await findLaunch({ flightNumber: id });
}

async function scheduleNewLaunch(launch) {
	const targetPlanet = await PlanetModel.findOne({
		keplerName: launch.target,
	});
	if (!targetPlanet) throw new Error('No matching planet found!');
	const newFlightNumber = (await getLatestFlightNumber()) + 1;
	const newLaunch = Object.assign(launch, {
		upcoming: true,
		success: true,
		customers: ['ZTM', 'NASA'],
		flightNumber: newFlightNumber,
	});

	await saveLaunch(newLaunch);
}

async function abortLaunchById(id) {
	const abortedLaunch = await getLaunchById(id);
	if (!abortedLaunch) return false;
	await LaunchModel.updateOne(
		{ flightNumber: id },
		{
			success: false,
			upcoming: false,
		},
	);
	return abortedLaunch;
}

module.exports = {
	loadLaunchesData,
	getAllLaunches,
	getLaunchById,
	scheduleNewLaunch,
	abortLaunchById,
};
