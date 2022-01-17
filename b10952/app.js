var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().split('\n');

// console.log(input)
for(var i=0; i<input.length-1; i++) { // -1을 해준 이유 : 문제에서 input의 맨 마지막 값은 0이라고 알려줬음
    let numbers = input[i].split(' ').map(v => v * 1);
    console.log(numbers)
    
}
