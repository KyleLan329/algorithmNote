const readline = require('readline');
const randomArr = require('./randomArr.js');

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
                if (typeof (parseInt(input,10)) === 'number') {
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
            console.log('Now you can input the sort name and try.')
            rl.prompt();
            break;
    }

})


rl.on('line', (line) => {
    switch (line.trim()) {
        case 'bubble':
            const bubbleSort  = require('../sort/Bubble_Sort.js');
            console.log(bubbleSort(rd));
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

