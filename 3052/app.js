var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

const array = [];

input.forEach(x => {
     const num = x % 42;
    
    if (array.indexOf(num) === -1) { // array에서 num이 발견되지 않는 경우 -1을 반환
        array.push(num);
    }
});

console.log(array.length);
