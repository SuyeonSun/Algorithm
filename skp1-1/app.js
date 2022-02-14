let Numbers = [4, 6, 2, 7, 9];
let answers = [];
let count = 0;

function solution(Numbers) {
  let max = Numbers[0];
  for (let i = 1; i < Numbers.length; i++) {
    if (max < Numbers[i]) {
      max = Numbers[i];
    }
  }
  answers.push(max);
  Numbers.splice(Numbers.indexOf(max), 1);
  count++;
  if (count < 2) {
    return solution(Numbers);
  }
  return answers[0] + answers[1];
}

console.log(solution(Numbers));
