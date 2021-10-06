# JavaScript [수학 기본 문제1]

## 등차수열의 항 찾기

```javascript
function answer(a, d, n) {
  let index = -1;

  // mine
  let tmp = 1;

  while (true) {
    if (n < a) {
      return index;
    } else if (n == a) {
      index = tmp;
      return index;
    } else {
      a += d;
      tmp++;
    }
  }

  // user code (1)
  if ((n - a) % d == 0) {
    index = (n - a) / d + 1;
  }

  // user code (2)
  let num;
  for (let i = 1; ; i++) {
    num = a + d * (i - 1);

    if (num > n) break;

    if (num == n) {
      index = i;
      break;
    }
  }

  return index;
}
```

---

## 잃어버린 카드 찾기

```javascript
function answer(a, b, c) {
  let number = 0;

  num = [a, b, c];
  num.sort((x, y) => x - y);

  // mine
  let d = 0;
  if (num[1] - num[0] < num[2] - num[1]) {
    d = num[1] - num[0];
    number = num[1] + d;
  } else {
    d = num[2] - num[1];
    number = num[0] + d;
  }

  // user code (1)
  let d = 0;
  for (let i = 1; i < num.length; i++) {
    d += num[i] - num[i - 1];
  }
  d /= num.length;

  let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;
  number = num[0] + d * index;

  return number;
}
```

---

## 실전 문제풀이 (기본) - 문자열을 정수로 바꾸기

```javascript
function solution(s) {
  var answer = 0;
  answer = parseInt(s);
  return answer;

  // user code
  return s / 1; // 문자열을 정수로 동적으로 변환한다.
}
```

---

## 실전 문제풀이 (기본) - 짝수와 홀수

```javascript
function solution(num) {
  var answer = "";

  // mine
  answer = num % 2 == 0 ? "Even" : "Odd";
  return answer;

  // user code
  // 0 일때를 이용해서 삼항 연산자를 사용한다.
  return num % 2 ? "Odd" : "Even";
}
```

---

## 실전 문제풀이 (기본) - 2016년

```javascript
function solution(a, b) {
  var answer = "";

  let day = new Date(2016, a - 1, b).getDay();

  switch (day) {
    case 0:
      answer = "SUN";
      break;
    case 1:
      answer = "MON";
      break;
    case 2:
      answer = "TUE";
      break;
    case 3:
      answer = "WED";
      break;
    case 4:
      answer = "THU";
      break;
    case 5:
      answer = "FRI";
      break;
    case 6:
      answer = "SAT";
      break;
    default:
      break;
  }

  // user code
  let days = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
  answer = days[day];

  return answer;
}
```

---

## 실전 문제 풀이 (기본) - 폰켓몬

```javascript
function solution(nums) {
  var answer = 0;
  let n = nums.length / 2;

  let m = new Set(nums).size;

  answer = m > n ? n : m;

  return answer;
}
```

---

## 실전 문제 풀이 (기본) - 가운데 글자 가져오기

```javascript
function solution(s) {
  var answer = "";

  let center = parseInt(s.length / 2);
  if (s.length % 2 == 0) {
    answer = s[center - 1] + s[center];
  } else {
    answer = s[center];
  }
  return answer;

  // user code(1)
  return s.substr(Math.round(s.length / 2) - 1, s.length % 2 == 0 ? 2 : 1);

  // user code(2)
  return s.slice(parseInt((s.length - 1) / 2), Math.round((s.length + 1) / 2));
}
```

---

## 실전 문제 풀이 (기본) - 문자열 내 마음대로 정렬하기

```javascript
function solution(strings, n) {
  return strings.sort((x, y) => (x[n] == y[n] ? (x > y ? 1 : -1) : x[n] > y[n] ? 1 : -1));
}
```

---

## 실전 문제 풀이 (기본) - 직사각형 별찍기

```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  let text = "";
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      text += "*";
    }
    console.log(text);
    text = "";
  }

  // user code
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
```

---

## 실전 문제 풀이 (기본) - 두 정수 사이의 합

```javascript
function solution(a, b) {
  var answer = 0;
  let start, end;

  if (a > b) {
    start = b;
    end = a;
  } else {
    start = a;
    end = b;
  }

  for (let i = start; i <= end; i++) {
    answer += i;
  }
  return answer;

  // user code
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
```

---

## 실전 문제 풀이 (기본) - 부족한 금액 계산하기

```javascript
function solution(price, money, count) {
  var answer = 0;

  for (let i = 1; i <= count; i++) {
    answer += i * price;
  }
  return answer > money ? answer - money : 0;

  // user code
  answer = (price * (1 + count) * count) / 2 - money;

  return answer > 0 ? answer : 0;
}
```

---

## 실전 문제 풀이 (기본) - K번째 수

```javascript
function solution(array, commands) {
  var answer = [];

  for (let item of commands) {
    let tmp_array = array.slice(item[0] - 1, item[1]);
    tmp_array.sort((x, y) => x - y);
    answer.push(tmp_array[item[2] - 1]);
  }

  return answer;

  // user code (map을 이용한다)
  return commands.map((command) => {
    const [s, e, p] = command;
    return array.slice(s - 1, e).sort((x, y) => x - y)[p - 1];
  });
}
```

---

## 실전 문제 풀이 (기본) - 나누어 떨어지는 숫자 배열

```javascript
function solution(arr, divisor) {
  var answer = [];

  arr.sort((x, y) => x - y);

  arr.map((element) => {
    if (element % divisor == 0) {
      answer.push(element);
    }
  });

  return answer.length ? answer : [-1];

  // user code
  var answer = arr.filter((n) => n % divisor == 0);

  return answer.length ? answer.sort((x, y) => x - y) : [-1];
}
```

---

## 실전 문제 풀이 (기본) - 같은 숫자는 싫어

```javascript
function solution(arr) {
  var answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] != arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;

  // user code
  return arr.filter((v, i) => v != arr[i + 1]);
}
```
