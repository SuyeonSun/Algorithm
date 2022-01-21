var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

let cnt = input[0];
let numbers = input[1].split('');
let sum = 0;

for (var i=0; i<numbers.length; i++) {
    sum += Number(numbers[i]);
}

console.log(sum);
