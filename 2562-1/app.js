var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
var input = fs.readFileSync(filePath).toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');
input = input.map(Number);

function solution(input) {
  let max = input[0];
  let maxIdx = 0;
  for (let i = 1; i < input.length; i++) {
    if (max < input[i]) {
      max = input[i];
      maxIdx = i;
    }
  }
  return console.log(max), console.log(maxIdx + 1);
}

solution(input);
