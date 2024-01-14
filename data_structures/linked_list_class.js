import Node from './node_class';

class LinkedList {
	constructor() {
		this.head = null;
	}

	addToHead(data) {
		const currentHead = this.head;
		this.head = new Node(data);
		if (currentHead) {
			this.head.setNextNode(currentHead);
		}
	}
}
