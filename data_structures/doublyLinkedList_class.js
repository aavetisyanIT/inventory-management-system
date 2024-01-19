import { Node } from './doublyLinkedNode';

export class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
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
