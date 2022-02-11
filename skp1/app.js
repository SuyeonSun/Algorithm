// let Numbers = [4, 6, 2, 7, 9]

// function solution(Numbers) {
//     Numbers.sort((a, b) => b-a);
//     let sum = Numbers[0] + Numbers[1]
//     console.log(sum)
//     return sum;
// }

// solution(Numbers);

let Numbers = [4, 6, 2, 7, 9];
let answers = [];
let count = 0; // count 함수 안에 선언하면 안된다.

function solution(Numbers) {
  let max = Numbers[0];
  for (let i = 1; i < Numbers.length; i++) {
    if (max < Numbers[i]) {
      max = Numbers[i];
    }
  }
  Numbers.splice(Numbers.indexOf(max), 1);
  answers.push(max);

  count++;

  // 재귀 함수 호출에 대한 if문 조건 설정해주기
  if (count < 2) {
    return solution(Numbers);
  }
  return answers[0] + answers[1]; // break가 아니라, 재귀 함수 자체에 대한 return을 안해줬다.
}

console.log(solution(Numbers));
