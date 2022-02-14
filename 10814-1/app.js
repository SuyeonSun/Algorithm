var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

input = input.slice(0, input.length);

function solution(input) {
  input = input.slice(1, input.length);
  console.log(input);
  input = input.sort((a, b) => parseFloat(a) - parseFloat(b)); // 문자열을 숫자로 변환
  return input.join("\n");
}

console.log(solution(input));
