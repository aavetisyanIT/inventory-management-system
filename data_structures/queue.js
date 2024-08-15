import { LinkedList } from './linked_list_class.js';

export class Queue {
	constructor(maxSize = Infinity) {
		this.queue = new LinkedList();
		this.size = 0;
		this.maxSize = maxSize;
	}

	hasRoom() {
		return this.size < this.maxSize;
	}

	isEmpty() {
		return !this.size;
	}

	enqueue(data) {
		if (!this.hasRoom()) throw new Error('Queue is full!');
		this.queue.addToTail(data);
		this.size++;
		console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
	}

	dequeue() {
		if (this.isEmpty()) throw new Error('Queue is empty!');
		const data = this.queue.removeHead();
		this.size--;
		console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
		return data;
	}
}
