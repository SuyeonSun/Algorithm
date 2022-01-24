var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().split('\n');

console.log('강한친구 대한육군 강한친구 대한육군');