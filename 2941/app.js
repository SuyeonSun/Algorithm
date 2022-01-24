var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

input = input[0];

function solution(input) {
    let words = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
    for (let word of words) {
        input = input.split(word).join('@');
    }
    return input.length;
}

console.log(solution(input));
