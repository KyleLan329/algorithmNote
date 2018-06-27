function Insertion_Sort(arr) {
    let newArr = [...arr];
    let len = newArr.length;
    for (let i = 1; i< len; i++) {
        let preIndex = i - 1;
        let current = newArr[i];
        while (preIndex >= 0 && newArr[preIndex] > current) {
            newArr[preIndex + 1] = newArr[preIndex];
            preIndex--;
        }
        newArr[preIndex + 1] = current;
    }
    return newArr;
}

module.exports = Insertion_Sort;