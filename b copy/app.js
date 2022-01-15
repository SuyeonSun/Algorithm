var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().split(' ');

// console.log(input);

let min = Number(input[1]);
let hr = Number(input[0]);

if (min >= 45) {
    min = min - 45
} else {
    if (hr == 0) {
        hr = 24 - 1
        min = 60 - (45-min);
    }
    else {
        hr = hr-1;
        min = 60 - (45-min);
    }
}

console.log(hr, min);