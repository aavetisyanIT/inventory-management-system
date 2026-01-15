class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newTail = new Node(val);

    if (!this.head) {
      this.head = newTail;
      this.tail = newTail;
      this.length++;
      return this;
    }

    this.tail.next = newTail;
    newTail.prev = this.tail;
    this.tail = newTail;
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return null;

    const oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return oldTail;
    }

    this.tail = oldTail.prev;
    this.tail.next = null;
    oldTail.prev = null;
    this.length--;

    return oldTail;
  }

  shift() {
    if (!this.head) return null;

    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return oldHead;
    }
    const newHead = this.head.next;
    oldHead.next = null;
    newHead.prev = null;
    this.head = newHead;
    this.length--;

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

    this.head.prev = newHead;
    newHead.next = this.head;
    this.head = newHead;
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return null;

    const middle = Math.floor(this.length / 2);

    let counter = 0;
    let currentNode = null;
    if (index <= middle) {
      currentNode = this.head;
      while (counter !== index) {
        counter++;
        currentNode = currentNode.next;
      }
    } else {
      counter = this.length - 1;
      currentNode = this.tail;

      while (counter !== index) {
        counter--;
        currentNode = currentNode.prev;
      }
    }

    return currentNode;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }
}

const myList = new DoublyLinkedList();
myList.push(100);
myList.push(201);
myList.push(250);
myList.push(350);
myList.push(999);

console.log(myList.get(4));

// console.log(myList);
