// 不开辟新空间
const swap = require('../utils/swap.js');

function Quick_Sort2(arr, leftIndex, rightIndex) {
    let newArr = leftIndex === undefined? arr : [...arr];

    leftIndex = leftIndex !== undefined ? leftIndex : 0;
    rightIndex = rightIndex !== undefined ? rightIndex : newArr.length - 1;
    
    if (leftIndex < rightIndex) {
        let pivotNum = Pivot.call(this, newArr, leftIndex, rightIndex);
        Quick_Sort2(newArr, leftIndex, pivotNum - 1 );
        Quick_Sort2(newArr, pivotNum + 1, rightIndex );
    }

    return newArr;
}

function Pivot(newArr, leftIndex, rightIndex) {
    let firstRunner = leftIndex - 1;
    let pivot = newArr[rightIndex];

    for (let secondRunner = leftIndex; secondRunner < rightIndex; secondRunner++) {
        if (newArr[secondRunner] < pivot) {
            firstRunner++;
            console.log('swtich ' + newArr[firstRunner] + ' and ' + newArr[secondRunner]);
            swap(newArr, firstRunner, secondRunner);
        }
    }
    
    if (newArr[firstRunner + 1] > pivot) {
        console.log('->Swtich ' + pivot + ' and ' + newArr[firstRunner + 1]);
        swap(newArr,firstRunner + 1, rightIndex);
    }
    console.log('pivotNum-> ' + (firstRunner + 1));
    return firstRunner + 1;
}

module.exports = Quick_Sort2;