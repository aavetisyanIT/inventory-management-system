import { LinkedList } from './linked_list_class.js';

export class Queue {
	constructor() {
		this.queue = new LinkedList();
		this.size = 0;
	}

	enqueue(data) {
		this.queue.addToTail(data);
		this.size++;
		console.log(`Added ${data}! Queue size is now ${this.size}.`);
	}

	dequeue() {
		const data = this.queue.removeHead();
		this.size--;
		console.log(`Removed ${data}! Queue size is ${this.size}.`);
		return data;
	}
}

const restaurantOrders = new Queue();
console.log(`restaurantOrders has ${restaurantOrders.size} nodes`);
