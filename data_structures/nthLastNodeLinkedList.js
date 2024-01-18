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
