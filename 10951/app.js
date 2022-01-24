var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let length = input.length;
let i=0;

while (length>0) {
    let array=input[i].split(' ').map(Number)
    console.log(array[0] + array[1]);
    i ++;
    length --;
}
