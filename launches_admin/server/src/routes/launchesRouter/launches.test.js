const response = require('supertest');

const App = require('../../app');
const { mongoConnect } = require('../../services/mongo');

describe.skip('Test Launches', () => {
	beforeAll(async () => {
		await mongoConnect();
	});
	test('Test GET launches', () => {
		response(App).get('/launches').expect(200);
	});
});
