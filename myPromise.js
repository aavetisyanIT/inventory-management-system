const myPromise = new Promise((res, rej) => {
	const num = Math.random();
	if (num < 0.5) {
		res(num);
	} else {
		rej(num);
	}
});

function onSuccess(input) {
	console.log('Success', input);
}

function onReject(input) {
	console.log('Error', input);
}

myPromise.then(onSuccess, onReject);
