export class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}

	setNextNode(node) {
		this.next = node;
	}
}
const firstNode = new Node(3);
console.log(firstNode.data);
console.log(firstNode.next);
