// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function
//    Weave receives two queues as arguments and combines
//    the contents of each into a new, third queue.
//    The third queue should contain the *alterating* content
//    of the two queues. The function should handle
//    queues of diff lengths without inserting 'undefined
//    into the new one
//    Do not access the array inside of any queue, only use
//    'add', 'remove', and 'peek' functions

/*
        Source Queue One
        hi  to  you ------>
                           ->  1   hi   2   to   3   you
        1   2   3   ------>
        Source Queue Two
 */
// --- Examples
//  const queueOne = new Queue();
//  queueOne.add(1);
//  queueOne.add(2);
//  const queueTwo = new Queue();
//  queueTwo.add('Hi');
//  queueTwo.add('There');
//  const q = weave(queueOne, queueTwo);
//  q.remove();   // 1
//  q.remove();   // 'Hi'
//  q.remove();   // 2
//  q.remove();   // 'There'


const Queue = require("./queue");

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove())
    }
  }
  return q;
}

module.exports = weave;
