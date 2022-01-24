var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

let array = input.toString().trim().split(' ');
if(array[0]=="") {
    console.log(0);
} else {
    console.log(array.length);
}