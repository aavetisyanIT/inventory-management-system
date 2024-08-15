/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0;
	let right = nums.length;

	while (left < right) {
		const middle = Math.floor((left + right) / 2);
		if (target === nums[middle]) return middle;
		if (target < nums[middle]) right = middle;
		if (target > nums[middle]) left = middle + 1;
	}
	return -1;
};
