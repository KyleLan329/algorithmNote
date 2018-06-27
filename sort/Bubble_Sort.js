const swap = require('../utils/swap');

function Bubble_Sort(arr) {
    let len = arr.length;
    for ( let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
               [arr[i], arr[j]] = swap(arr[i], arr[j]);
            }
        }
    }
    return arr;
}

module.exports = Bubble_Sort;

