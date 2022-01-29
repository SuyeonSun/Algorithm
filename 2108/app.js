var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

let numbers = input.slice(0, input.length).map(Number);

// 산술평균
let sum = numbers.reduce(function add(total, currValue) {
    return total + currValue;
}, 0);
let firstValue = Math.round(sum % input[0]); // round로 소수점 버리기
console.log(firstValue)

// 중앙값
numbers = numbers.sort((a,b) => a-b);
let secondValue = numbers[numbers.length/2];

// 최빈값



