// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2
// 1 2 3 4
// 3 2 1
//

const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(val) {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    this.second.push(val);
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
  }

  peek() {
    return this.first.peek();
  }

  remove() {
    return this.first.pop();
  }
}

module.exports = Queue;
