import LinkListNode from './LinkListNode';

export default class LinkList extends LinkListNode {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        let newNode = new LinkListNode(value,this.head);
        this.head = newNode;
        
        if (!this.tail) {
            this.tail = newNode;
        }
        return;
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

    find(value) {
        
    }
}