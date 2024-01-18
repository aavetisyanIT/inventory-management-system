export function findMiddle(linkedList) {
	let fasterNode = linkedList.head;
	let slowerNode = linkedList.head;

	while (fasterNode) {
		fasterNode = fasterNode.next;
		if (fasterNode) {
			fasterNode = fasterNode.next;
			slowerNode = slowerNode.next;
		}
	}
	return slowerNode;
}

//  this solution has O(n) time complexity, and O(1) space complexity,
//  since only two nodes are created no matter the size of the input list.
