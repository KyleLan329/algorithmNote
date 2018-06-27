function swap(pre, next) {
    let temp = pre;
    pre = next;
    next = temp; 
    return [pre, next]
}

module.exports = swap;