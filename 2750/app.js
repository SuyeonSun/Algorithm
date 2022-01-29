var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

// 내풀이
// let cnt = input[0];
// let numbers = [];

// for (let i=1; i<input.length; i++) {
//     numbers.push(input[i]);
// }

// numbers.sort((a, b) => a - b);
// for (let i=0; i<numbers.length; i++) {
//     console.log(numbers[i])
// }

// 다른사람 풀이
let array = input.slice(1, input.length);
array.sort((a, b) => a-b);

for (let i=0; i<array.length; i++) {
    console.log(array[i]);
}
