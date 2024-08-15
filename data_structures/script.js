import { clear, load } from './runway.js';

const flights = [
	'Botswana Bird flight #345',
	'Singapore Skies flight #890',
	'Mexico Mirage flight #234',
	'Greenland Flying Seals flight #567',
];

// Enqueue runway with planes
const departing = load(flights);
// Clear each plane to takeoff
clear(departing);
