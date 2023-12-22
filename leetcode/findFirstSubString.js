/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
	for (i = 0; i < haystack.length - needle.length + 1; i++) {
		if (haystack.slice(i, i + needle.length) === needle) {
			return i;
		}
	}
	return -1;
};
