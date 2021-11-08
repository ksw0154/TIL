function solution(name) {
  var answer = 0;
  let start = 65;

  for (let i = 0; i < name.length; i++) {
    console.log(String.fromCharCode(start));
    start++;
  }

  return answer;
}

console.log(solution("JEROEN"));
console.log(solution("JAN"));

console.log("A".charCodeAt() - 1);
console.log("Z".charCodeAt());
