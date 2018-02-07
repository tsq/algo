const circular = require("./index");
const L = require("./linkedlist");
const Node = L.Node;
const List = L.LinkedList;

test('circular is a function', () => {
  expect(typeof circular).toEqual('function');
});

test('circular detects circular linked list', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;
  expect(circular(l)).toEqual(true);
});

test('circular detects circular linked list linked the head', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = a;
  expect(circular(l)).toEqual(true);
});


test('circular detects non-circular linked list', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = null;
  expect(circular(l)).toEqual(false);
});