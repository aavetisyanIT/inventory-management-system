function bubbleSort(array) {
	let swapped;

	do {
		swapped = false;
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] < array[i + 1]) {
				const tempEle = array[i];
				array[i] = array[i + 1];
				array[i + 1] = tempEle;
				swapped = true;
			}
		}
	} while (swapped);
	return array;
}

const array = [5, 3, 8, 1, 4, 2];
console.log('Original array:', array);
const sortedArray = bubbleSort(array);
console.log('Sorted array:', sortedArray);
