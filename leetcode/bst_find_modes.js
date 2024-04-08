/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
	const treeMap = {};

	function populateTreeMap(node) {
		if (node.left) populateTreeMap(node.left);
		treeMap[node.val] ? treeMap[node.val]++ : (treeMap[node.val] = 1);
		if (node.right) populateTreeMap(node.right);
	}
	populateTreeMap(root);

	const result = [];
	let maxCount = 0;
	for (let value in treeMap) {
		if (!result.length) {
			result.push(value);
			maxCount = treeMap[value];
		} else if (maxCount < treeMap[value]) {
			maxCount = treeMap[value];
			result.length = 0;
			result.push(value);
		} else if (maxCount === treeMap[value]) {
			result.push(value);
		}
	}

	return result;
};
