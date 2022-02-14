var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

function solution(input) {
  let array = [];
  input.forEach((x) => {
    const num = x % 42;
    // array에서 num이 발견되지 않는 경우
    if (array.indexOf(num) === -1) {
      array.push(num);
    }
  });
  return console.log(array);
}

solution(input);
