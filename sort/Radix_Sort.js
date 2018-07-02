function Radix_Sort(arr) {
    let newArr = [...arr];
    let numberToPass = Math.floor(Math.log10(Math.max(...newArr))) + 1;
    let maxNumDigit = 10;
    console.log(maxNumDigit)
    let len = newArr.length;
    let mod = 10;
    let div = 1;

    for(let i = 0; i < numberToPass; i++) {
        let moded = mod ** (i+1);
        let dived = moded/10;
        let buckets = new Array(maxNumDigit).fill(null).map(()=> []);
        
        newArr.forEach((item, index, arr) => {
            let digitIndex = Math.floor((item % moded)/dived);
            buckets[digitIndex].push(item);
            console.log('moded' + moded + ' dived ' + dived);
            console.log(buckets);
        });
        
        newArr = buckets.reduce((acc, val) => {
            return [...acc, ...val];
        }, []);
    }
    

    
    return newArr;
}


module.exports = Radix_Sort;