const swap = require('../utils/swap');

function Bubble_Sort(arr) {
    let newArr = [...arr];
    arr.forEach((item, index) => {
        newArr[index] = item;
    });
    let len = newArr.length;
    for ( let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (newArr[i] > newArr[j]) {
               [newArr[i], newArr[j]] = swap(newArr[i], newArr[j]);
            }
        }
    }
    return newArr;
}

module.exports = Bubble_Sort;

