const { shopForBeans, soakTheBeans, cookTheBeans } = require('./library.js');

// Write your code below:
function firstPromise() {
	return new Promise(res => {
		setTimeout(() => {
			res('data from firstPromise');
		}, 1000);
	});
}

function secondPromise(data) {
	return new Promise(res => {
		setTimeout(() => {
			res(data);
		}, 1000);
	});
}
function thirdPromise(data) {
	return new Promise(res => {
		setTimeout(() => {
			res('thirdPromise ' + data);
		}, 1000);
	});
}

firstPromise()
	.then(data => secondPromise(data))
	.then(data => thirdPromise(data))
	.then(data => console.log(data));
