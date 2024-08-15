const inventory = {
	sunglasses: 0,
	pants: 1088,
	bags: 1344,
};

// Write your code below:
function myExecutor(resolve, reject) {
	if (inventory.sunglasses > 0) {
		resolve('Sunglasses order processed.');
	} else {
		reject('That item is sold out.');
	}
}

const orderSunglasses = () => new Promise(myExecutor);

const orderPromise = orderSunglasses();

console.log(orderPromise);
