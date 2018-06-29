// 需要开辟新的空间

function Quick_Sort(arr) {
    let newArr = [...arr];

    if (newArr.length <= 1) {
        return newArr;
    }

    const leftArr = [];
    const rightArr = [];

    let pivotElement = newArr.shift();
    let centerArr = [pivotElement];

    while(newArr.length) {
        let currentElement = newArr.shift();

        if (currentElement == pivotElement) {
            centerArr.push(currentElement);
        } else if (currentElement < pivotElement) {
            leftArr.push(currentElement);
        } else {
            rightArr.push(currentElement);
        }
    }

    let leftSortedArr = Quick_Sort(leftArr);
    let rightSortedArr = Quick_Sort(rightArr);

    return leftSortedArr.concat(centerArr, rightSortedArr);
}

module.exports = Quick_Sort;