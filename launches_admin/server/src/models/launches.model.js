const LaunchModel = require('./launches.mongo.model');
const PlanetModel = require('./planets.mongo.model');

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

async function saveLaunch(launch) {
	const targetPlanet = await PlanetModel.findOne({ keplerName: launch.target });
	if (!targetPlanet) throw new Error('No planet found!');

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

async function getAllLaunches() {
	return await LaunchModel.find({}, { _id: 0, __v: 0 });
}

async function getLaunchById(id) {
	return await LaunchModel.findOne({ flightNumber: id });
}

async function scheduleNewLaunch(launch) {
	const newFlightNumber = (await getLatestFlightNumber()) + 1;
	const newLaunch = Object.assign(launch, {
		upcoming: true,
		success: true,
		customer: ['ZTM', 'NASA'],
		flightNumber: newFlightNumber,
	});

	await saveLaunch(newLaunch);
}

(async () => {
	saveLaunch(launch);
})();

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
	getAllLaunches,
	getLaunchById,
	scheduleNewLaunch,
	abortLaunchById,
};
