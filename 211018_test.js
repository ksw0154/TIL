/**
 * prob1
 */
function answer(n) {
  let i = -1;
  while (i * i * i < n) {
    i++;
  }

  if (i * i * i == n) {
    result = i * i * i;
  } else if (i * i * i > n) {
    i--;
    result = i * i * i;
  }
  return result;
}

/**
 * prob2
 */
function answer(str) {
  let result = [];
  let string = String(str).split("");
  for (let i = 0; i <= 9; i++) {
    result.push({ key: i, value: 0 });
  }

  for (let j = 0; j < string.length; j++) {
    result[string[j]].value += 1;
  }

  result.sort(function (a, b) {
    return b.value - a.value;
  });

  for (let i = 0; i < result.length; i++) {
    process.stdout.write(`${result[i].key} `);
  }
}

/**
 * prob4
 */
function solution(arr) {
  let index = 0;
  var answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      answer += arr[i][0];
    } else {
      if (arr[i][index] > arr[i][index + 1]) {
        answer = answer + arr[i][index];
      } else {
        answer += arr[i][index + 1];
        index = index + 1;
      }
    }
  }

  return answer;
}
