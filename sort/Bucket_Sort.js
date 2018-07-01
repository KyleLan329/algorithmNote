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

    const DEFAULT_BUCKET_SIZE = 100;
    let size = bucketSize || DEFAULT_BUCKET_SIZE;
    let bucket_num = Math.floor((maxValue - minValue)/size) + 1;
    console.log(bucket_num);
    const bucket =new Array(bucket_num);
    // bucket.fill([]);
    
    for(let i=0; i<bucket_num; i++) {
        bucket[i] = [];
    }

    console.log(bucket);
     
    for (let i = 0; i < newArr.length; i++) {
        let bucktIndex = Math.floor((newArr[i] - minValue) / size) ;
        console.log(newArr[i] + ' / ' + size + ' = ' + bucktIndex);
        console.log(bucket[bucktIndex]);
        bucket[bucktIndex].push(newArr[i]);
        console.log(i, bucket);
    }


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