export const nthLastNode = (linkedList, n) => {
	let nthNode = null;
	let runnerNode = linkedList.head;
	let count = 0;
	while (runnerNode) {
		runnerNode = runnerNode.next;
		if (count >= n) {
			if (!nthNode) {
				nthNode = linkedList.head;
			}
			nthNode = nthNode.next;
		}
		count++;
	}
	return nthNode;
};

//  this problem efficiently–in O(n) time (we must iterate through the entire list once), and O(1)
//  space complexity (we always use only three variables no matter what size the list is:
// two pointers and a counter).
