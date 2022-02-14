var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');
input = input.slice(1, input.length);
input = input.sort((a, b) => parseFloat(a) - parseFloat(b));
console.log(input.join("\n"));
