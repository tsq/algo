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
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  
  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      let node = this.head;
      this.head = node.next;
    }
  }

  removeLast() {
    if (this.head) {
      if (this.head.next === null) {
        this.head = null;
        return ;
      }
      let previous = this.head;
      let node = this.head.next;
      while (node.next) {
        previous = node;
        node = node.next;
      }
      previous.next = null;
    }
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data, null);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(data, null);
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;

    /*const len = this.size();
    if (index > len - 1 || len === 0) {
      return null;
    } else {
      let node = this.head;
      let count = 0;
      if (index === 0) {
        return node;
      }
      while (node.next) {
        node = node.next;
        count++;
        if (count === index) {
          return node;
        }
      }
    }*/
  }

  removeAt(index) {
    const len = this.size();
    if (len === 0 || index > len - 1) {
      return ;
    }
    let node = this.head;
    let count = 0;
    if (index === 0) {
      this.head = node.next;
      return ;
    }
    while (node) {
      if (count === index) {
        const prevNode = this.getAt(index - 1);
        const nextNode = this.getAt(index + 1);
        if (nextNode) {
          prevNode.next = nextNode;
        } else {
          prevNode.next = null;
        }
      }
      node = node.next;
      count++;
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data, null);
    } else {
      if (index === 0) {
        const firstNode = this.getFirst();
        this.head = new Node(data, firstNode);
      } else {
        if (this.size() - 1 <= index) {
          const lastNode = this.getLast();
          lastNode.next = new Node(data);
        } else {
          const currNode = this.getAt(index);
          const prevNode = this.getAt(index - 1);
          prevNode.next = new Node(data, currNode);
        }
      }
    }
  }

  forEach() {

  }
}

module.exports = { Node, LinkedList };