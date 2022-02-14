var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

input = input.slice(1);

function solution(input) {
  input.sort((a, b) => a - b);
  return input.join("\n");
}

console.log(solution(input));
