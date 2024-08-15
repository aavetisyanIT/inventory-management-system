var removeElements = function (head, val) {
	if (!head) return head;

	let newList = new ListNode();
	let newHead = newList;

	while (head) {
		if (head.val !== val) {
			let newNode = new ListNode(head.val);
			newList.next = newNode;
			newList = newList.next;
		}
		head = head.next;
	}
	newHead = newHead.next;

	return newHead;
};
