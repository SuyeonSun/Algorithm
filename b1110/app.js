var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

let origin = Number(input[0]);
let count = 0;

while(true) {
    let sum = Math.floor(input/10) + (input%10);
    input = (input%10)*10 + (sum%10);
    count++;
    if(origin === input) break;
}
console.log(count);