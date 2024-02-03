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
    const linkedList = new LinkedList(this.hashmap[arrayIndex]);
    if(!linkedList.head) {
      linkedList.addToHead({key, value});
      return;
    }
  }
}

	retrieve(key) {
		const arrayIndex = this.hash(key);
		return this.hashmap[arrayIndex];
	}
}
