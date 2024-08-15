export const middleNode = function (head) {
	let slowNode = head;
	let fastNode = head.next;
	if (!fastNode) return slowNode;

	while (fastNode) {
		slowNode = slowNode.next;
		if (!fastNode.next || !fastNode.next.next) return slowNode;
		fastNode = fastNode.next.next;
	}
};
