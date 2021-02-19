// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

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
}

module.exports = Queue;
