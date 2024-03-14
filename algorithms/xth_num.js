/**
Write a function, getX, that given an int x and a integer array num, returns the Xth number if the list was in sorted order. In other words, the Xth smallest number.

Function Name: getX

Input: An integer, x, and an unsorted list of integers nums that aren’t necessarily distinct

Output: The integer corresponding to the Xth number in the sorted list
 */

function getX(x, nums) {
	let swapped = true;

	while (swapped) {
		swapped = false;
		for (let i = 0; i < nums.length - 1; i++) {
			if (nums[i] < nums[i + 1]) {
				const temp = nums[i];
				nums[i] = nums[i + 1];
				nums[i + 1] = temp;
				swapped = true;
			}
		}
	}
	return nums[x - 1];
}

console.log(getX(2, [5, 10, -3, -3, 7, 9]));
