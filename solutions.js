/**
 * Prob 1
 * @param {number[]} arr
 * @return {number}
 */
function solution(arr) {
  var answer = 0;

  arr.sort((x, y) => x - y);

  arr.sort((x, y) => x - y);
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] != arr[i + 1]) {
      answer = arr[i];
      return answer;
    }
  }
  return answer;
}

/**
 * Prob 2
 * @param {Array} fruits
 * @return {number}
 */
function solution(fruits) {
  var answer = 0;
  let sum = 0;

  if (Math.max(...fruits) < 0) {
    return Math.max(...fruits);
  }

  fruits.forEach((element) => {
    sum += element;
    if (sum < 0) {
      sum = 0;
    }
    if (sum > answer) {
      answer = sum;
    }
  });

  return Math.max(sum, answer);
}

/**
 * Prob 3
 * @param {string} s
 * @return {number}
 */
function solution(s) {
  var answer = 0;
  let num_list = s.split("+");

  for (let i = 0; i < num_list.length; i++) {
    if (Number(num_list[i])) {
      answer += Number(num_list[i]);
    } else {
      if (num_list[i][0] == "-") {
        let minus_list = num_list[i].split("-");
        for (let i = 0; i < minus_list.length; i++) {
          answer -= Number(minus_list[i]);
        }
      } else {
        let mix_list = num_list[i].split("-");
        for (let i = 0; i < mix_list.length; i++) {
          if (i == 0) {
            answer += Number(mix_list[i]);
          } else {
            answer -= Number(mix_list[i]);
          }
        }
      }
    }
  }

  return answer;
}

/**
 * Prob 4
 * @param {number} n
 * @return {number}
 */
function solution(n) {
  var answer = 0;

  let tmp = 1;
  let num = 2;
  while (tmp > 0) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    tmp = n - sum;
    if (tmp % num == 0) {
      answer += 1;
    }
    num++;
  }
  return answer + 1;
}

/**
 * Prob 5
 * @param {string} s
 * @return {number}
 */
function solution(s) {
  var answer = 0;
  let count_list = new Object();
  for (let i = 0; i < s.length; i++) {
    if (count_list[`${s[i]}`]) {
      count_list[`${s[i]}`] += 1;
    } else {
      count_list[`${s[i]}`] = 1;
    }
  }

  let max = 0;
  for (const key in count_list) {
    if (count_list[key] > max) {
      max = count_list[key];
      answer = key;
    }
  }
  return answer;
}
