var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');
input = Number(input);

function solution(num) {
    if (num <= 1) {
        return 1;
    }
    return num * solution(num-1);
}

console.log(solution(input));