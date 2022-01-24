var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

let cnt = Number(input[0])
let num = input[1].split(' ').map(Number);
let answer = num.sort((a, b) => a-b);
console.log(answer[0], answer[cnt-1])