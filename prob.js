// 규칙
// '()'인 괄호 열 값은 2
// '[]'인 괄호 열 값은 3
// '(X)'인 괄호 열 값은 2 * X로 계산
// '[X]'인 괄호 열 값은 3 * X로 계산
// '(XY)' = X + Y

if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}

function answer(str) {
  let result = 0;

  // '(' -> * 2, '[' -> * 3, ']' -> /2, ']' -> /3
  // () or [] 현재 temp 값을 result에 더해준다.

  let stack = [];
  let temp = 1;
  for (let i = 0; i < str.length; i++) {
    let mark = str[i];

    switch (mark) {
      case "(":
        temp *= 2;
        stack.push(mark);
        break;
      case "[":
        temp *= 3;
        stack.push(mark);
        break;
      case ")":
        if (stack.isEmpty() || stack.peek() != "(") {
          return 0;
        }
        if (str[i - 1] == "(") {
          result += temp;
        }

        stack.pop();
        temp /= 2;
        break;
      case "]":
        if (stack.isEmpty() || stack.peek() != "[") {
          return 0;
        }

        if (str[i - 1] == "[") {
          result += temp;
        }

        stack.pop();
        temp /= 3;
        break;
    }
  }
  if (!stack.isEmpty()) {
    return 0;
  }

  return result;
}

let input = ["(()[[]])", "[][]((])", "(()[[]])([])"];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
