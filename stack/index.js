// --- Directions
// Create a stack data structure. The stack
// should be a class with methods 'push', 'pop', and 'peek'
// Adding an element to the stack should store it until it is removed.

// --- Examples
// const s = new Stack();
// s.push(1);
// s.push(2);
// s.pop();   // return 2
// s.pop();   // return 1


/*
 FILO

 Stack Class

 ```
 shift
 unshift
 push    -> push
 Array       pop     -> pop
 splice
 slice

 ```
 */

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
