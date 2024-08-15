import { LinkedList } from './linked_list_class';
import { Node } from './node_class';

export class HashMap {
	constructor(size = 0) {
		this.hashmap = new Array(size).fill(null);
	}

	hash(key) {
		let hashCode = 0;
		for (let i = 0; i < key.length; i++) {
			hashCode += hashCode + key.charCodeAt(i);
		}
		return hashCode % this.hashmap.length;
	}

	assign(key, value) {
		const arrayIndex = this.hash(key);
		const linkedList = this.hashmap[arrayIndex];
		if (linkedList.head === null) {
			linkedList.addToHead({ key, value });
			return;
		}
		let current = linkedList.head;
		while (current) {
			if (current.data.key === key) {
				current.data = { key, value };
				return;
			}
			if (!current.next) {
				current.setNextNode(new Node({ key, value }));
				return;
			}
			current = current.getNextNode();
		}
	}

	retrieve(key) {
		const arrayIndex = this.hash(key);
		const list = this.hashmap[arrayIndex];

		let current = list.head;
		while (current) {
			if (current.data.key === key) return current.data.value;
			current = current.getNextNode();
		}
		return null;
	}
}
