const response = require('supertest');

const App = require('../../app');

describe('Test Launches', () => {
	test('Test GET launches', () => {
		response(App).get('/launches').expect(200);
	});
});
