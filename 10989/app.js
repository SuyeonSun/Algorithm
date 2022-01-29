var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

let array = input.slice(0, input.length).sort((a,b)=>a-b).map(Number);

// array.sort((a,b) => a-b);

for (let i=0; i<input.length; i++) {
    console.log(array[i]);
}
