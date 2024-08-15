const start = Date.now();

const mergeSort = startArray => {
	if (startArray.length === 1) return startArray;

	const mid = Math.floor(startArray.length / 2);

	const sortedLeftArr = mergeSort(startArray.slice(0, mid));
	const sortedRightArr = mergeSort(startArray.slice(mid));

	return merge(sortedLeftArr, sortedRightArr);
};

const merge = (leftArray, rightArray) => {
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

	return [...sortedArray, ...leftArray, ...rightArray];
};

const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));

console.log('AAA time:', Date.now() - start);
