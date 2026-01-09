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
}

const myList = new DoublyLinkedList();
myList.push(100);
myList.push(201);
myList.push(250);
myList.push(350);
myList.push(999);

console.log(myList);
