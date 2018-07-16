const LinkList = require('../LinkList/LinkList');

class Stack {
    constructor() {
        this.stack = new LinkList();
    }

    push(value) {
        this.stack.append(value);
    }

    pop() {
        this.stack.deleteTail();
    }

    isEmpty() {
        return !this.stack.tail;
    }

    peek() {
        if (!this.isEmpty()) {
            return null;
        }

        return this.stack.tail.value;
    }

    toArray() {
        return this.stack
            .toArray()
            .map(linkedListNode => linkedListNode.value)
            .reverse();
    }

    toString(callback) {
        return this.stack.toString(callback);
    }

}

module.exports = Stack;