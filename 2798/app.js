var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

function solution(input) {
    let [cnt, max] = input[0].split(' ');
    let numbers = input[1].split(' ').map(Number);

    for (let i=0; i<cnt; i++) {
        for (let j=0; j<cnt; j++) {
            for (let k=0; k<cnt; k++) {
                // 동일한 카드를 선택할 수 없기 때문에 아래의 조건의 경우 다음 loop로 넘어간다.
                if (i == j || i == k || j == k) {
                    
                }
            }
        }
    }

    return numbers
}

console.log(solution(input));