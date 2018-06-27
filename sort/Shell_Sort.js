function Shell_Sort(arr) {
    let newArr = [...arr];
    let len = newArr.length;
    let gap = Math.floor(len/2);

    while(gap > 0) {
        for (let i = gap; i < len; i++) {
            let preIndex = i - gap;
            current = newArr[i];
            while(preIndex >= 0 && newArr[preIndex] > current) {
                newArr[preIndex + gap] = newArr[preIndex];
                preIndex -= gap;
            }
            newArr[preIndex + gap] = current;
        }
        gap = Math.floor(gap/2)
    }

    return newArr;
}

module.exports = Shell_Sort;