const insertionSort = require('./Insertion_Sort');

function Bucket_Sort(arr,bucketSize) {
    let newArr = [...arr];
    let minValue = 0;
    let maxValue = 0;

    newArr.forEach((item) => {
        if (item > maxValue) {
            maxValue = item;
        } else if (item < minValue) {
            minValue = item;
        }
    });

    const DEFAULT_BUCKET_SIZE = 5;
    let size = bucketSize || DEFAULT_BUCKET_SIZE;
    let bucket_num = Math.floor((maxValue - minValue)/size);
    console.log(bucket_num);
    const bucket = Array(bucket_num).fill([]);
     
    newArr.forEach((item, index, arr) => {
        console.log(Math.floor((item - minValue)/ bucket_num));
        bucket[Math.floor((item - minValue)/bucket_num)].push(item);
    });

    console.log(bucket);

    newArr = [];

    bucket.forEach((item, index, arr) => {
        let arr1 = insertionSort(arr[index]);
        arr1.forEach((item, index, arr) => {
            newArr.push(arr[index]);
        })
    });

    return newArr;
}

module.exports = Bucket_Sort;