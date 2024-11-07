class HashNode<T = number> {
  value: T;
  next?: HashNode;
}

class MyHashSet {
  private head: HashNode | undefined;
  constructor() {
    this.head = undefined;
  }

  add(key: number): void {
    const newNode: HashNode = { value: key };
    if (!this.head) {
      this.head = newNode;
      return;
    }
    if (this.contains(key)) {
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }
  remove(key: number): void {
    let currentNode = this.head;
    if (currentNode?.value === key) {
      this.head = this.head?.next;
      return;
    }
    while (currentNode && currentNode.next) {
      if (currentNode.next.value === key) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }
  contains(key: number): boolean {
    let currentNode = this.head;
    while (currentNode) {
      if (key === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
