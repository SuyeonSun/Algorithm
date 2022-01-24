var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

input = input.toString().trim().split(" ");
const array = input.map(element => [...element].reverse().join(''));

// 기본 배열을 유지하고 싶다면, ... 깊은 복사하기
console.log(array[0] > array[1] ? array[0] : array[1])