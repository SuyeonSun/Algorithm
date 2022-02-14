var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

input = input[0].split(" ");

function solution(input) {
  let firstWord = input[0].split("").reverse().join("");
  let secondWord = input[1].split("").reverse().join("");
  if (Number(firstWord) > Number(secondWord)) {
    return firstWord;
  } else {
    return secondWord;
  }
}

console.log(solution(input));
