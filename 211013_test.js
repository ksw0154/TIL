/**
 *
 * @param {number} n
 * @return {number}
 */
function solution(n) {
  var answer = 0;
  let string = "";
  for (let i = 0; i <= n; i++) {
    string += i.toString(2);
  }
  answer = string.match(/1/g).length;

  return answer;
}

console.log(solution(0));
