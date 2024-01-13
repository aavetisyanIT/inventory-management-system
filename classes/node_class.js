export class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}
const firstNode = new Node(3);
console.log(firstNode.data);
console.log(firstNode.next);
