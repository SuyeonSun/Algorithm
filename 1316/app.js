var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

function solution(input) {
    let cnt = input[0];
    let arr =[];

    for (let i=1; i<cnt; i++) {
        arr.push(input[i]);
    }

    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length; j++) {
            if (!arr[i][j]) {
                
            }
        }
    }


}

console.log(solution(input));