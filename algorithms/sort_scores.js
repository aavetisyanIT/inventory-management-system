/**
Write a scoreSorter() function that will take a list of unsorted scores along with the highest possible score. It should return a sorted list of all of the scores, in descending order from high to low. You are expected to create and implement your own sorting algorithm for this challenge.

For example, scoreSorter([1, 2, 3, 9999, 13], 10000) should return [9999, 13, 3, 2, 1].
 */

function scoreSorter(array, topScore) {
	let swapped = true;
	while (swapped) {
		swapped = false;
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] < array[i + 1]) {
				const holder = array[i];
				array[i] = array[i + 1];
				array[i + 1] = holder;
				swapped = true;
			}
		}
	}
	return array;
}

console.log(scoreSorter([1, 2, 3, 9999, 13], 10000));
