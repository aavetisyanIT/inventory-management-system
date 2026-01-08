class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return null;
    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead;
  }

  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
      this.length++;
      return this;
    }
    const oldHead = this.head;
    this.head = newHead;
    newHead.next = oldHead;
    this.length++;

    return this;
  }

  get(index) {
    if (index > this.length || index < 0) return null;

    if (!this.head) return null;
    let currentNode = this.head;
    let counter = 0;

    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index >= this.length || index < 0) return false;

    if (index === 0) return !!this.unshift(val);
    if (index === this.length - 1) return !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index >= this.length || index < 0) return null;
    if (!this.head) return null;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = prevNode.next.next;
    return removedNode;
  }

  reverse() {
    if (!this.head) return null;

    let middle = this.head;
    this.head = this.tail;
    this.tail = middle;
    let left = null;
    let right = null;

    for (let i = 1; i <= this.length; i++) {
      right = middle.next;
      middle.next = left;

      left = middle;
      middle = right;
    }

    return this;
  }

  printList(node) {
    let result = [];
    while (node !== null) {
      result.push(node.val);
      node = node.next;
    }
    console.log(result.join(" -> "));
  }
}

const myList = new SingleLinkedList();
myList.push(100);
myList.push(201);
myList.push(250);
myList.push(350);
myList.push(999);

myList.reverse();
// console.log(JSON.stringify(myList, undefined, 4));
myList.printList(myList.head);
