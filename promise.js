const randomPromise = () => {
	return new Promise((resolve, reject) => {
		const randomNum = Math.random();
		if (randomNum < 0.5) {
			reject('Error!!!!!');
		} else {
			resolve('Resolved');
		}
	});
};

randomPromise()
	.then(data => {
		console.log(data);
		return randomPromise();
	})
	.then(data => {
		console.log(data);
		return randomPromise();
	})
	.then(data => {
		console.log(data);
		return randomPromise();
	})
	.catch(error => console.log(error));
