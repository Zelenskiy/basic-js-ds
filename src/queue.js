const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
   constructor() {
     this.front = null;
     this.rear = null;
   }
 
   getUnderlyingList() {
     return this.front;
   }
 
   enqueue(value) {
     const newNode = new ListNode(value);
 
     if (!this.front) {
       this.front = newNode;
       this.rear = newNode;
     } else {
       this.rear.next = newNode;
       this.rear = newNode;
     }
   }
 
   dequeue() {
     if (!this.front) {
       return null;
     }
 
     const value = this.front.value;
     this.front = this.front.next;
 
     if (!this.front) {
       this.rear = null;
     }
 
     return value;
   }
 }

module.exports = {
  Queue
};
