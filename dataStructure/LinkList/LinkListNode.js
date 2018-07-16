class LinkListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(callbackFn) {
        return callbackFn? callbackFn(this.value): `${this.value}`;
    }
}

module.exports = LinkListNode;