function solution(n) {
  if (n == 1) return 1;
  if (n == 2) return 2;

  return solution(n - 1) + solution(n - 2);
}

console.log(solution(10));
