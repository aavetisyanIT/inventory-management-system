const removeElements = function (head, val) {
	let currentNode = head;
	if (!head) return head;
	if (currentNode.val === val) currentNode = currentNode.next;
	let count = 0;

	console.log('AAA currentNode', currentNode);

	while (currentNode && currentNode.next) {
		count++;
		console.log('AAA count', count);

		if (currentNode.next.val === val) {
			currentNode.next = currentNode.next.next;
		} else {
			currentNode = currentNode.next;
		}
	}

	return head;
};
