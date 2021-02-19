// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  push(val) {
    this.cursor = {
      prev: this.cursor,
      val,
    };
  }

  pop() {
    const { prev, val } = this.cursor;
    this.cursor = prev;
    return val;
  }

  peek() {
    return this.cursor?.val;
  }
}

module.exports = Stack;
