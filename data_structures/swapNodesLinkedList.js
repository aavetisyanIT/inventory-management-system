export function swapNodes(list, data1, data2) {
	if (data1 === data2) return console.log('Data matches. No swap needed');

	let node1 = list.head;
	let node2 = list.head;
	let node1Prev = null;
	let node2Prev = null;

	while (node1) {
		if (node1.data === data1) break;
		node1Prev = node1;
		node1 = node1.getNextNode();
	}

	while (node2) {
		if (node2.data === data2) break;
		node2Prev = node2;
		node2 = node2.getNextNode();
	}

	if (!node1 || !node2) return console.log('Data is not found in the list');

	if (!node1Prev) {
		list.head = node2;
	} else {
		node1Prev.setNextNode(node2);
	}

	if (!node2Prev) {
		list.head = node1;
	} else {
		node2Prev.setNextNode(node1);
	}

	const holderNode = node1.getNextNode();
	node1.setNextNode(node2.getNextNode());
	node2.setNextNode(holderNode);
}
