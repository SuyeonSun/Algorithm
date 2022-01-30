var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

let array = input.toString().split('');
array = array.map(Number).sort((a,b) =>b-a);

console.log(array.join(''))
