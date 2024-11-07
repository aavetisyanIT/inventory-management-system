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
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
