const readline = require('readline');
const randomArr = require('./randomArr.js');

function CLI_Init() {
    let rd = [];
    let range = 0;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'tinyCLI> '
    });

    rl.question('Welcome to tingCLI, do you want to create random array before sort?(yes/no) ', (input) => {
        switch (input.trim()) {
            case 'yes':
                rl.question('How much number you perfer to add in random array? ', (input) => {
                    if (typeof (parseInt(input, 10)) === 'number') {
                        range = input;
                        rd = randomArr(range);
                        console.log(rd);
                    } else {
                        console.log('Do not receive any number!');
                    }
                    rl.prompt();
                });
                break;
            default:
                rl.question('Please input a array, number sperate by comma(1,2,3):  ', (input) => {
                    input = input.split(',');
                    input.forEach((item, index, arr) => {
                        arr[index] = parseInt(item, 10);
                    })
                    if (Object.prototype.toString.call(input).indexOf('Array') >= 0) {
                        rd = input;
                        console.log('Receive an array!');
                        rl.prompt();
                    } else {
                        console.log('Oh! Have fun!');
                        rl.prompt();
                    }
                })
                rl.prompt();
                break;
        }

    })


    rl.on('line', (line) => {
        switch (line.trim()) {
            case 'rd':
                console.log(rd);
                break;
            case 'bubble':
                const bubbleSort = require('../sort/Bubble_Sort.js');
                console.log(bubbleSort(rd));
                break;
            case 'selection':
                const selectionSort = require('../sort/Selection_Sort.js');
                console.log(selectionSort(rd));
                break;
            case 'insertion':
                const insertionSort = require('../sort/Insertion_Sort.js');
                console.log(insertionSort(rd));
                break;
            case 'shell':
                const shellSort = require('../sort/Shell_Sort.js');
                console.log(shellSort(rd));
                break;
            case 'merge':
                const mergeSort = require('../sort/Merge_Sort.js');
                console.log(mergeSort(rd));
                break;
            case 'quick1':
                const quick1Sort = require('../sort/Quick_Sort.js');
                console.log(quick1Sort(rd));
                break;
            case 'quick2':
                const quick2Sort = require('../sort/Quick_Sort2.js');
                console.log(quick2Sort(rd));
                break;
            case 'heap':
                const heapSort = require('../sort/Heap_Sort.js');
                console.log(heapSort(rd));
                break;
            case 'counting':
                const countingSort = require('../sort/Counting_Sort.js');
                console.log(countingSort(rd));
                break;
            case 'radix':
                const radixSort = require('../sort/Radix_Sort.js');
                console.log(radixSort(rd));
                break;
            case 'bucket':
                rl.question('Input a bucket size?', (input) => {
                   const bucketSort = require('../sort/Bucket_Sort.js');
                   if (typeof(input) == 'number') {
                    console.log(bucketSort(rd, input));
                   } else {
                    console.log(bucketSort(rd));
                   }
                   rl.prompt();
                });
                break;
            case 'rfRd':
                rd = randomArr(range);
                console.log(rd);
                break;
            case 'exit':
                rl.write(null, { ctrl: true, name: 'c' });
                break;
            default:
                console.log(`I hear that you may say '${line.trim()}'`);
                break;
        }
        rl.prompt();
    }).on('close', () => {
        console.log('Have a great day!');
        process.exit(0);
    });
}

module.exports = CLI_Init;
