// 다리를 지나는 트럭 (스택/큐) (프로그래머스)

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let queue = [];
  let sum = 0;

  for (let i = 0; i < bridge_length; i++) {
    queue.push(0);
  }

  let truck = truck_weights.shift();

  queue.push(truck);
  queue.shift();
  sum += truck;
  answer++;

  while (sum) {
    sum -= queue.shift();
    if (sum + truck_weights[0] <= weight) {
      truck = truck_weights.shift();
      queue.push(truck);
      sum += truck;
    } else {
      queue.push(0);
    }
    answer++;
  }

  return answer;
}

console.log(solution(100, 100, [10]));
