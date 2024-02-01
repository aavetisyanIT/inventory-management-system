const swapNodes = function (head, k) {
	let leftNode = head;
	let rightNode = head;

	for (let i = 1; i < k; i++) {
		leftNode = leftNode.next;
	}

	let currentNode = leftNode;

	while (currentNode.next) {
		rightNode = rightNode.next;
		currentNode = currentNode.next;
	}

	const tempNode = leftNode.val;
	leftNode.val = rightNode.val;
	rightNode.val = tempNode;

	return head;
};
