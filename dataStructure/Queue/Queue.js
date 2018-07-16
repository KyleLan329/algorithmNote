const LinkList = require('../LinkList/LinkList');

class Queue {
    constructor() {
        this.queue = new LinkList();
    }

    enquenue(value) {
        this.queue.append(value);
        return this;
    }

    dequeue() {
        const deleteNode = this.queue.deleteHead();
        return deleteNode? deleteNode: null;
    }

    peek() {
        if (!this.queue.head) {
            return null;
        }

        return this.queue.head.value;
    }

    isEmpty() {
        return !this.queue.head.value;
    }
    
    toString(callback) {
        return this.queue.toString(callback);
    }
}

module.exports = Queue;