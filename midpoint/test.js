const midpoint = require("./index");
const L = require("./linkedlist");
const Node = L.Node;
const LinkedList = L.LinkedList;

test('Midpoint is a function', () => {
  expect(typeof midpoint).toEqual('function');
});

describe('Midpoint returns the middle node of odd numbered list', () => {
  test('when the list has 3 elements', () => {
    const l = new LinkedList();
    l.insertFirst('a');
    l.insertFirst('b');
    l.insertFirst('c');
    expect(midpoint(l).data).toEqual('b');
  });

  test('when the list has 5 elements', () => {
    const l = new LinkedList();
    l.insertFirst('a');
    l.insertFirst('b');
    l.insertFirst('c');
    l.insertFirst('d');
    l.insertFirst('e');
    expect(midpoint(l).data).toEqual('c');
  });
});

describe('Midpoint returns the middle node of even numbered list', () => {
  test('when the list has 2 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    expect(midpoint(l).data).toEqual('a');
  });

  test('when the list has 4 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    expect(midpoint(l).data).toEqual('b');
  });
});