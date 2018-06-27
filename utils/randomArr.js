function RandomArr(range) {
    let arr = [];
    if (range < 0 || range > 3000) {
        return 'error range';
    }
    while( range-- > 0) {
        arr.push(Math.round(Math.random()*1000))
    }
    return arr;
}

module.exports = RandomArr;