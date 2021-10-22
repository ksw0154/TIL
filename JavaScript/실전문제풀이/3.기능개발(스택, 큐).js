// 기능 개발 (스택/큐)
function solution(progresses, speeds) {
  var answer = [];

  while (progresses.length != 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i]; // 각 배열의 원소에 작업 속도를 더해줌
    }
    let count = 0;
    while (progresses[0] >= 100) {
      progresses.shift(); // 작업 진도가 다 채워졌으니 빼준다.
      speeds.shift(); // 작업 진도가 빠졌으니 속도도 같이 빠진다.
      count++; // 빠진 갯수를 더해준다.
    }
    if (count > 0) {
      // count 결과를 배열에 push한다.
      answer.push(count);
    }
  }
  return answer;
}

let progresses = [93, 30, 55];
let speeds = [1, 30, 5];

console.log(solution(progresses, speeds));
