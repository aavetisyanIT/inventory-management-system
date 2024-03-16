const launches = new Map();

let latestLaunchNumber = 100;

const launch = {
	flightNumber: 100,
	mission: 'Explore Space X',
	rocket: 'Explorer IS1',
	launchDate: new Date('December 20, 2040'),
	target: ' Kepler-1652 b',
	customer: ['NASA'],
	upcoming: true,
	success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
	return Array.from(launches.values());
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
