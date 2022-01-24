var fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (var i=1; i<=input[0]; i++) {
    var numbers = input[i].split(' ').map(Number);
    var cnt = numbers[0];
    var sum = numbers.reduce((a, b) => a+b, -cnt); 
    // 초기값은 - cnt : let sum = numbers.reduce((a, b) => a+b, -numbers[0]);
    // let sum = numbers.reduce((a, b) => a+b) - numbers[0];
    var avg = sum / cnt;
    
    var aboveAvg = 0;
    for (var j=0; j<=cnt; j++) {
        if (numbers[j] > avg) {
            aboveAvg ++;
        }
    }
    var result = ((aboveAvg/cnt)*100).toFixed(3)
    console.log(result + '%')
}

// https://gurtn.tistory.com/45
