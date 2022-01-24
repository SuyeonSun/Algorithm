var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().split(' ');

input[0] = Number(input[0]);
input[1] = Number(input[1]);

if (input[0] > input[1]) {
    console.log('>')
}

if (input[0] < input[1]) {
    console.log('<')
}

if (input[0] == input[1]) {
    console.log('==')
}