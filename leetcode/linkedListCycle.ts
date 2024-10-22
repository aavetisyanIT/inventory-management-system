// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let slowNode: ListNode | null = head;
  let fastNode: ListNode | null = head;
  while (slowNode && fastNode && fastNode.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
    if (slowNode === fastNode) return true;
  }
  return false;
}
