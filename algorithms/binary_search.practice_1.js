function binarySearch(arr, target) {
	let right = arr.length;
	let left = 0;

	while (right > left) {
		const middleIndex = Math.floor((left + right) / 2);
		const middleValue = arr[middleIndex];

		if (target === middleValue) {
			return middleIndex;
		}
		if (target < middleValue) {
			right = middleIndex;
			continue;
		}
		if (target > middleIndex) {
			left = middleIndex + 1;
		}
	}
	return null;
}

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 58;

const targetIndex = binarySearch(searchable, target);

console.log(`The target index is ${targetIndex}.`);
