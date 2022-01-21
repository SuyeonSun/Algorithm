var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

let resultArr = [];
let result = '';

for (let i = 97; i <= 122; i++) {
  let alphabet = String.fromCharCode(i);

  for (let j = 0; j < input.length; j++) {
    resultArr.push(input[j].indexOf(alphabet));
  }
}

result = resultArr.join(' ');
console.log(result);
