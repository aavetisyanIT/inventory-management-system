import { Node } from './doublyLinkedNode';

export class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	addToHead(data) {
		const currentHead = this.head;
		const newHead = new Node(data);

		if (currentHead) {
			this.head = newHead;
			newHead.setNextNode(currentHead);
			currentHead.setPreviousNode(newHead);
		}
		this.head = newHead;
		if (!this.tail) this.tail = newHead;
	}

	addToTail(data) {
		const currentTail = this.tail;
		const newTail = new Node(data);

		if (currentTail) {
			this.tail = newTail;
			newTail.setPreviousNode(currentTail);
			currentTail.setNextNode(newTail);
		}
		this.tail = newTail;
		if (!this.head) this.head = newTail;
	}

	printList() {
		let currentNode = this.head;
		let output = '<head> ';
		while (currentNode !== null) {
			output += currentNode.data + ' ';
			currentNode = currentNode.getNextNode();
		}
		output += '<tail>';
		console.log(output);
	}
}
