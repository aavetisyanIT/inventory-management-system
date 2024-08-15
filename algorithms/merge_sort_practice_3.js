function mergeSort(array) {
	console.log(`mergerSort array is ${array}`);
	if (array.length === 1) return array;

	const middleIndex = Math.floor(array.length / 2);
	console.log('calling mergeSort with leftArray');
	const leftArray = mergeSort(array.slice(0, middleIndex));
	console.log('calling mergeSort with rightArray');
	const rightArray = mergeSort(array.slice(middleIndex));

	return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
	console.log(`merge leftArray is ${leftArray}, rightArray is ${rightArray}`);
	const sortedArray = [];

	while (leftArray.length && rightArray.length) {
		if (leftArray[0] < rightArray[0]) {
			sortedArray.push(leftArray[0]);
			leftArray.shift();
		} else {
			sortedArray.push(rightArray[0]);
			rightArray.shift();
		}
	}

	console.log(
		`merge sorted array: ${sortedArray.concat(leftArray, rightArray)}`,
	);
	return sortedArray.concat(leftArray, rightArray);
}

const array = [5, 3, 8, 1, 4, 2];
console.log('Original array:', array);
const sortedArray = mergeSort(array);
console.log('Sorted array:', sortedArray);
