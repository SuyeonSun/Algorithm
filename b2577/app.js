var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

var answer = input.map(Number).reduce((a,b) => a*b);
answer = String(answer).split('').map(Number);

//var zeroCount = answer.filter (element => '0' === element).length;

for (var i=0; i<=9; i++) {
    var count = answer.filter (element => i === element).length;
    console.log(count)
}
