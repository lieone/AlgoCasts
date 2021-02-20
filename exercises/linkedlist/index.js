// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let size = 0;
    for (let node = this.head; !!node; node = node.next) {
      size += 1;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let last = this.head;
    while (last && last.next) {
      last = last.next;
    }
    return last;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head && this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let node = this.head;
    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.insertFirst(data);
      return;
    }
    this.getLast().next = new Node(data);
  }

  getAt(index) {
    let node = this.head;
    let i = 0;
    while (node && i < index) {
      i += 1;
      node = node.next;
    }
    return node;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(index - 1);
    if (prev.next) {
      prev.next = prev.next.next;
    }
  }

  insertAt(data, index) {
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    const prev = this.getAt(index - 1);
    if (prev) {
      prev.next = new Node(data, prev.next);
    } else {
      this.insertLast(data);
    }
  }

  forEach(consumer) {
    let node = this.head;
    let index = 0;
    while (node) {
      consumer.apply(this, [node, index++]);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
