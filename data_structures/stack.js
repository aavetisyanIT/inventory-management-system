import { LinkedList } from './linked_list_class';

export class Stack {
	constructor(maxSize = Infinity) {
		this.stack = new LinkedList();
		this.maxSize = maxSize;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	hasRoom() {
		return this.size < this.maxSize;
	}

	push(value) {
		if (!this.hasRoom()) throw new Error('Stack is full');
		this.stack.addToHead(value);
		this.size++;
	}

	pop() {
		if (!this.isEmpty()) {
			const value = this.stack.removeHead();
			this.size--;
			return value;
		} 
    console.log('Stack is empty!');
	}

	peek() {
		if (!this.isEmpty()) {
			return this.stack.head.data;
		}
    return null;
	}
}
