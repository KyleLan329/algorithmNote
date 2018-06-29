const swap = require('../utils/swap');

function Selection_Sort(arr) {
    let newArr = [...arr];
    let len = arr.length;
    let minIndex = 0;
    for(let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (newArr[minIndex] > newArr[j]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            swap(newArr, i, minIndex);
        }
    }
    return newArr;
}

module.exports = Selection_Sort;