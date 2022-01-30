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

// 중앙값
numbers = numbers.sort((a,b) => a-b);
let secondValue = numbers[numbers.length/2];

// 최빈값
let checkValueMap = new Map();
for (let i=0; i<numbers.length; i++) {
    if (checkValueMap.has(numbers[i])) {
        checkValueMap.set(numbers[i], checkValueMap.get(numbers[i]) + 1);
    } else {
        checkValueMap.set(numbers[i], 0);
    }
}

let max = 0;
let checkValueArr = [];
for (let value of checkValueMap.keys()) {
    if (max < checkValueMap.get(value)) {
        max = checkValueMap.get(value);
    }
}
for (let value of checkValueMap.keys()) {
    if (max === checkValueMap.get(value)) {
        checkValueArr.push(value);
    }
}




