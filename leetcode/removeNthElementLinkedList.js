const removeNthFromEnd = function (head, n) {
	let rightNode = head;
	let leftNode = head;

	let count = 0;
	while (count < n) {
		rightNode = rightNode.next;
		count++;
	}

	if (!rightNode) return head.next;

	while (rightNode.next) {
		rightNode = rightNode.next;
		leftNode = leftNode.next;
	}
	leftNode.next = leftNode.next.next;

	return head;
};
