function swapNodes(list, data1, data2) {
	if (data1 === data2) return list;
	let currentNode = list;
	while (currentNode.next) {
		if (currentNode.next.data === data1) {
			const data2Node = new Node(data2);
			data2Node.next = currentNode.next.next;
			currentNode.next = data2Node;
		} else if (currentNode.next.data === data2) {
			const data1Node = new Node(data1);
			data1Node.next = currentNode.next.next;
			currentNode.next = data1Node;
		}
		currentNode = currentNode.next;
	}
	return list;
}
