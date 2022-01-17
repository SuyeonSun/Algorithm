var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

let nums = input.map(Number);

ans = nums[0]; // 선언을 밖에 해줘야 했다.
let cnt = 0;

for (var i=1; i<9; i++) {
    // ans = nums[0]; 
    if (ans < nums[i]) {
        ans = nums[i];
        cnt = i;
    }
}

console.log(ans, cnt+1)
