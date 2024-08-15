const { parse } = require('csv-parse');
const fs = require('fs');
const path = require('path');
const PlanetModel = require('./planets.mongo.model');

function isHabitablePlanet(planet) {
	return (
		planet['koi_disposition'] === 'CONFIRMED' &&
		planet['koi_insol'] > 0.36 &&
		planet['koi_insol'] < 1.11 &&
		planet['koi_prad'] < 1.6
	);
}

function loadPlanets() {
	return new Promise((resolve, reject) => {
		fs.createReadStream(
			path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'),
		)
			.pipe(
				parse({
					comment: '#',
					columns: true,
				}),
			)
			.on('data', async data => {
				if (isHabitablePlanet(data)) {
					await addPlanet(data);
				}
			})
			.on('error', err => {
				reject(err);
			})
			.on('end', () => {
				resolve();
			});
	});
}

async function addPlanet(planet) {
	try {
		await PlanetModel.updateOne(
			{ keplerName: planet.kepler_name },
			{
				keplerName: planet.kepler_name,
			},
			{
				upsert: true,
			},
		);
	} catch (err) {
		console.error(`Not able to save planet. Error: ${err}`);
	}
}

async function getAllPlanets() {
	return await PlanetModel.find({}, { _id: 0, __v: 0 });
}

module.exports = {
	loadPlanets,
	getAllPlanets,
};
