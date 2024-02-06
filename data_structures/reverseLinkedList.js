export function reverseLinkedList(linkedList) {
	// Write your code here
	let prev = null;
	let current = linkedList;
	let next = null;

	while (current) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}

	return prev;
}
