function Merge_Sort(arr) {
    let newArr = [...arr];
    let len = newArr.length;

    if (len == 1) {
        return newArr;
    }

    let mid = Math.floor(len/2);
    let leftArray = newArr.slice(0,mid);
    let rightArray = newArr.slice(mid);

    return Merge(Merge_Sort(leftArray),Merge_Sort(rightArray));
}

function Merge(left, right) {
    let sortArr = [];
    
    while(left.length && right.length) {
        if (left[0] <= right[0]) {
            sortArr.push(left.shift());
        } else {
            sortArr.push(right.shift());
        }
    }

    while(left.length) {
        sortArr.push(left.shift());
    }

    while(right.length) {
        sortArr.push(right.shift());
    }

    return sortArr;
}

module.exports = Merge_Sort;