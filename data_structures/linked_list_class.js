import Node from './node_class';

class LinkedList {
	constructor() {
		this.head = null;
	}

	addToHead(data) {
		const newHead = new Node(data);
		const currentHead = this.head;
		this.head = newHead;
		if (currentHead) {
			this.head.setNextNode(currentHead);
		}
	}

	addToTail(data) {
		let tail = this.head;
		if (!tail) return this.addToHead(data);
		while (!tail.getNextNode()) {
			tail = tail.getNextNode();
		}
		tail.setNextNode(new Node(data));
	}
}
