import { LinkedList } from './linked_list_class.js';

export class Queue {
	constructor() {
		this.queue = new LinkedList();
		this.size = 0;
	}
}

const restaurantOrders = new Queue();
console.log(`restaurantOrders has ${restaurantOrders.size} nodes`);
