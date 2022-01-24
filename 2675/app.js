var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');
let result = [];

for (let i=1; i<=input[0]; i++) {

    let array = input[i].split(' ');
    for (let j=0; j<array[1].length; j++) {
        // console.log(array[1][j].repeat(array[0]))
        result.push(array[1][j].repeat(array[0]));
    }
    console.log(result.join(''))
    result=[] 
}