const binarySearch = (arr, target) => {
	let left = 0;
	let right = arr.length;

	while (left < right) {
		const indexToCheck = Math.floor((left + right) / 2);
		const checking = arr[indexToCheck];
		console.log(`indexToCheck equals: ${indexToCheck}`);

		if (checking === target) {
			return indexToCheck;
		} else if (target < checking) {
			right = indexToCheck;
		} else {
			left = indexToCheck + 1;
		}
	}
	return null;
};

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 58;

const targetIndex = binarySearch(searchable, target);

console.log(`The target index is ${targetIndex}.`);

module.exports = { binarySearch };
