//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let currentNodeA = headA;
  if (headA === headB) return headA;

  while (currentNodeA) {
    let currentNodeB = headB;
    while (currentNodeB) {
      if (currentNodeA === currentNodeB.next) return currentNodeA;
      if (currentNodeA.next === currentNodeB) return currentNodeB;
      if (currentNodeA.next === currentNodeB.next) return currentNodeA.next;
      currentNodeB = currentNodeB.next;
    }
    currentNodeA = currentNodeA.next;
  }

  return null;
}
