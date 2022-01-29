var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = []
for (let i=0; i<input.length; i++) {
    if (answer.indexOf(input[i])==-1) {
        answer.push(input[i]);
    }
}

console.log(answer.join('\n'));