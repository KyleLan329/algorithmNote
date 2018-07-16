const LinkListNode = require('./LinkListNode');

class LinkList extends LinkListNode {
    constructor() {
        super();
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        let newNode = new LinkListNode(value,this.head);
        this.head = newNode;
        
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }

    append(value) {
        let newNode = new LinkListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }        

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deleteNode = null;

        while (this.head && this.head.value == value) {
            deleteNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;
        if (currentNode !== null) {
            while(currentNode.next) {
                if (currentNode.next.value == value) {
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        

        if (this.tail.value == value) {
            this.tail = currentNode;
        }

        return deleteNode;
    }

    find({value = undefined, callback = undefined}) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while(currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }

            if (value !== undefined && currentNode.value == value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    }

    deleteTail() {
        if (this.head == this.tail) {
            const deleteTail = this.head;
            this.head = null;
            this.tail = null;

            return deleteTail;
        }

        const deleteTail = this.tail;

        let currentNode = this.head;
        while(currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;
        return deleteTail;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deleteHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deleteHead;
    }

    toArray() {
        const nodeList = [];

        let currentNode = this.head;

        while(currentNode) {
            nodeList.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return nodeList;
    }

    toString(callback) {
        return this.toArray().map(node => node.toString(callback).toString())
    }

}

module.exports = LinkList;