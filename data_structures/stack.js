import { LinkedList } from './linked_list_class';

export class Stack {
	constructor() {
		this.stack = new LinkedList();
	}

	peek() {
		return this.stack.head.data;
	}

	push(value) {
		this.stack.addToHead(value);
	}

	pop() {
		return this.stack.removeHead();
	}
}
