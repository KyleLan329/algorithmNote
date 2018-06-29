function swap(arr, pre, next) {
    let temp = arr[pre];
    arr[pre] = arr[next];
    arr[next] = temp; 
}

module.exports = swap;