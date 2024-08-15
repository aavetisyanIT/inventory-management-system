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

async function getData() {
	const firstCallData = await firstPromise();
	console.log(firstCallData);
	const secondPromiseData = await secondPromise('custom data');
	console.log(secondPromiseData);
	const result = await thirdPromise(firstCallData);
	console.log(result);
}

getData();

// Write your code below:
async function serveDinner() {
	const vegetablePromise = steamBroccoli();
	const starchPromise = cookRice();
	const proteinPromise = bakeChicken();
	const sidePromise = cookBeans();

	console.log(
		`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`,
	);
}

serveDinner();

async function serveDinnerAgain() {
	const foodArray = await Promise.all([
		steamBroccoli(),
		cookRice(),
		bakeChicken(),
		cookBeans(),
	]);
	let vegetable = foodArray[0];
	let starch = foodArray[1];
	let protein = foodArray[2];
	let side = foodArray[3];

	console.log(
		`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`,
	);
}
serveDinnerAgain();
