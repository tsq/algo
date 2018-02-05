// --- Directions
// Implement a Queue data structure using two stacks.
// Do not create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.

// --- Examples
//  const q = new Queue();
//  q.add(1);
//  q.add(2);
//  q.peek(); // return 1
//  q.remove(); // return 1
//  q.remove(); // return 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.oneStack = new Stack();
    this.twoStack = new Stack();
  }

  add(record) {
    this.oneStack.push(record);
  }

  remove() {
    const one = this.oneStack;
    const two = this.twoStack;
    while (one.peek()) {
      two.push(one.pop());
    }
    const result = two.pop();
    while (two.peek()) {
      one.push(two.pop());
    }
    return result;
  }

  peek() {
    const one = this.oneStack;
    const two = this.twoStack;
    while (one.peek()) {
      two.push(one.pop());
    }
    const result = two.peek();
    while (two.peek()) {
      one.push(two.pop());
    }
    return result;
  }
}

module.exports = Queue;
