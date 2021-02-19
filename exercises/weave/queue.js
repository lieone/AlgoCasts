// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.cursor = {};
    this.tail = this.cursor;
  }
  add(val) {
    this.cursor.val = val;
    this.cursor.prev = {};
    this.cursor = this.cursor.prev;
  }
  remove() {
    const { val, prev } = this.tail;
    this.tail = prev;
    return val;
  }
  peek() {
    return this.tail.val;
  }
}

module.exports = Queue;
