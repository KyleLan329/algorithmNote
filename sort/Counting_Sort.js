function Counting_Sort(arr) {
    let newArr = [...arr];
    let arrLen = newArr.length;
    let maxValue = 0;

    newArr.forEach((item) => {
        if (item >= maxValue) {
            maxValue = item;
        }
    })

    let bucketLen = maxValue + 1
    let bucket = Array(bucketLen);

    for (let i = 0; i < arrLen ; i++) {
        if (!bucket[newArr[i]]) {
            bucket[newArr[i]] = 0;
        }
        bucket[newArr[i]]++;
    }

    let sortedIndex = 0;
    newArr = [];

    for (let i = 0; i < bucketLen; i++) {
        while (bucket[i] > 0) {
            newArr[sortedIndex++] = i;
            bucket[i]--;
        }
    }

    return newArr;
}

module.exports = Counting_Sort;