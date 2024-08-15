import { Node } from './doublyLinkedNode.js';

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

	removeHead() {
		const removedHead = this.head;
		if (!removedHead) return;
		this.head = removedHead.getNextNode();
		if (this.head) this.head.setPreviousNode(null);
		if (removedHead === this.tail) this.removeTail();
		return removedHead.data;
	}

	removeTail() {
		const removedTail = this.tail;
		if (!removedTail) return;
		this.tail = removedTail.getPreviousNode();
		if (this.tail) this.tail.setNextNode(null);
		if (removedTail === this.head) this.removeHead();
		return removedTail.data;
	}

	removeByData(data) {
		let nodeToRemove;
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.data === data) {
				nodeToRemove = currentNode;
				break;
			}
			currentNode = currentNode.getNextNode();
		}
		if (!nodeToRemove) return nodeToRemove;
		if (this.head === nodeToRemove) return this.removeHead();
		if (this.tail === nodeToRemove) return this.removeTail();
		const nextNode = nodeToRemove.getNextNode();
		const previousNode = nodeToRemove.getPreviousNode();
		nextNode.setPreviousNode(previousNode);
		previousNode.setNextNode(nextNode);
		return nodeToRemove;
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
