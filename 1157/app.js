var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

input = input.toString().trim().toUpperCase().split("");
let count = new Array(input.length.fill(0));

for (let i=0; i<input.length; i++) {
    count[alpha.indexOf(input[i])]++;
}