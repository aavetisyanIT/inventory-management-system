const LaunchModel = require('./launches.mongo.model');
const PlanetModel = require('./planets.mongo.model');

const launches = new Map();

const DEFAULT_FLIGHT_NUMBER = 100;

const launch = {
	flightNumber: 100,
	mission: 'Explore Space X',
	rocket: 'Explorer IS1',
	launchDate: new Date('December 20, 2040'),
	target: 'Kepler-1652 b',
	customer: ['NASA'],
	upcoming: true,
	success: true,
};

launches.set(launch.flightNumber, launch);

async function saveLaunch(launch) {
	const targetPlanet = await PlanetModel.findOne({ keplerName: launch.target });
	if (!targetPlanet) throw new Error('No planet found!');

	await LaunchModel.updateOne({ flightNumber: launch.flightNumber }, launch, {
		upsert: true,
	});
}

async function getLatestFlightNumber() {
	const latestFlight = await LaunchModel.findOne().sort('-flightNumber');
	if (!latestFlight) return DEFAULT_FLIGHT_NUMBER;
	return latestFlight.flightNumber;
}

async function getAllLaunches() {
	return await LaunchModel.find({}, { _id: 0, __v: 0 });
}

function getLaunchById(id) {
	return launches.get(id);
}

function addNewLaunch(launch) {
	latestLaunchNumber++;
	launches.set(
		latestLaunchNumber,
		Object.assign(launch, {
			upcoming: true,
			success: true,
			customer: ['ZTM', 'NASA'],
			flightNumber: latestLaunchNumber,
		}),
	);
}

(async () => {
	saveLaunch(launch);
})();

function abortLaunchById(id) {
	const abortedLaunch = getLaunchById(id);
	abortedLaunch.success = false;
	abortedLaunch.upcoming = false;
	return abortedLaunch;
}

module.exports = {
	getAllLaunches,
	getLaunchById,
	addNewLaunch,
	abortLaunchById,
};
