var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().split('\n');

while(input[0][0] != 0) { // 0이 나올때까지
    const numbers = input.shift().split(" ");
    console.log(Number(numbers[0]) + Number(numbers[1]));
}