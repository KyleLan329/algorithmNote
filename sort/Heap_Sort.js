const swap = require('../utils/swap');

var len = 0;

function buildMaxHeap(arr) {
    len = arr.length;
    for(let i = Math.floor(len/2); i >= 0; i--) {
        heapify(arr,i);
    }
}

function heapify(arr, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function Heap_Sort(arr) {
    let newArr = [...arr];

    buildMaxHeap(newArr);

    for (let i = newArr.length - 1; i >= 0; i--) {
        swap(newArr, 0, i);
        len--;
        heapify(newArr, 0);
    }

    return newArr;
}

module.exports = Heap_Sort;