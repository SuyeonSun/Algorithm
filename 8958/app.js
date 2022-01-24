var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin).toString().split('\n');

for (var i=1; i<= input[0]; i++) {
    var score = 1;
    var total = 0;
    for (var j=0; j<input[i].length; j++) {
        if (input[i][j] === 'O') {
            total += score;
            score ++;
        } else {
            score = 1;
        }
    }
    console.log(total);
}