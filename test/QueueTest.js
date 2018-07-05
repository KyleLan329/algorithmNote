const Queue = require('../dataStructure/Queue/Queue');

let queue = new Queue();

console.log(queue.enquenue(1));
console.log(queue.enquenue(3));
console.log(queue.enquenue(5));
console.log(queue.enquenue(7));
console.log(queue.enquenue(9));
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.toString());
console.log(queue.peek());