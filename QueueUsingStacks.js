"use strict";
// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

class Queue {
  constructor() {
    this.queue = [];
    this.length = -1
  }
  push(item) {
    this.length += 1;
    this.queue[this.queue.length] = item;
  }
  pop() {
    this.queue.length -= 1
    return this.queue.splice(0,1);
  }
  peek() {
    return this.queue.length-1
  }
  empty() {
    return this.length > -1;
  }
}