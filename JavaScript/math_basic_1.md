# JavaScript [수학 기본 이론1]

## OverView

### 알고리즘 복잡도

- 입력 크기의 값에 대해서 단위 연산을 몇 번 수행하는지 계산하여, 알고리즘의 수행 시간을 평가하는 방법
- 빅오 : 최악의 상황을 고려하여 성능 측정 결과 표현
- 세타 : 평균적인 경우에서의 성능 측정 결과 표현
- 오메가 : 최선의 상황일 때의 성능 측정 결과 표현

### 경우의 수

- 어떤 사건 혹은 일이 일어날 수 있는 경우의 가짓수를 표현
- 완전탐색으로 경우의 수를 푸는 알고리즘
  - 순열 : 서로 다른 n개의 원소 중에서 r를 중복 없이 골라 순서에 상관 있게 나열하는 경우의 수
  - 조합 : 서로 다른 n개의 원소 중에서 r를 중복 없이 골라 순서에 상관 없이 나열하는 경우의 수
  - 중복 순열 : 서로 다른 n개의 원소 중에서 r를 중복 있게 골라 순서에 상관 있게 나열하는 경우의 수

### 점화식

- 수열에서 이웃하는 두 개의 항 사이에 성립하는 관계를 나타내는 관계식
- 등차 수열, 등비 수열, 팩토리얼, 피보나치 수열

---

## 알고리즘 복잡도

### 알고리즘 성능 평가 지표

- 정확성, 작업량, 최적성
- 메모리 사용량, 효율성 (시간 복잡도, 공간 복잡도) : 코딩테스트에서 중요시 봐야 할 것들
  - 왠만한 문제에서는 메모리 사용량을 넉넉하게 준다.
  - 시간 복잡도에 집중해서 문제를 풀면 된다.

### 시간 복잡도

- 입력 크기의 값에 대해서 단위 연산을 몇 번 수행하는지 계산하여, 알고리즘의 수행 시간을 평가하는 방법
- 빅오 : `최악의 상황`을 고려하여 성능 측정 결과 표현
- 세타 : `평균`적인 경우에서의 성능 측정 결과 표현
- 오메가 : `최선의 상황`일 때의 성능 측정 결과 표현

### Big-O Complexity Chart

- Excellent, good : O(1), O(log n)
- Fair : O(n)
- Bad : O(n log n)
- Horrible : O(n^2), O(2^n), O(n!)

### 빅오 표기법 예제

```javascript
function big_o(n) {
  let sum = 0; // 1회

  sum = n * 2; // 1회

  return sum; // 1회

  // 3-> O(1)
}
```

```javascript
function big_o(arr, n) {
  let sum = 0; // 1회

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  } // n회

  return sum; // 1회

  // n + 2 -> O(N)
}
```

```javascript
function big_o(arr, n) {
  let sum = 0; // 1회

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += arr[i][j];
    }
  } // n * n = n2(n 제곱)

  return sum; // 1회

  // n2 + 2 -> O(N2) (n제곱)
}
```

```javascript
function big_o(n) {
  let sum = 0; // 1회

  for (let i = 0; i < n; i *= 2) {
    sum += 2;
  } // n/2 회

  return sum; // 1회

  // n/2 + 2 -> O(log N)
}
```

- n/2는 log N 만큼 수렴한다.
- 병합정렬, 분할 정복에서 많이 사용 된다.
- O(N)보다 더 빠른 알고리즘을 가지고 있다.

#### Array 정렬 알고리즘에서 알고리즘에 따라 시간 복잡도와 공간 복잡도가 각각 다르다.

---

## 경우의 수

- 순열 : nPr (순서에 상관이 있다)
- 조합 : nCr (순서에 상관이 없다)

---

## 순열

- 서로 다른 n개의 원소 중에서 r를 중복 없이 골라 순서에 상관 있게 나열하는 경우의 수 (nPr)
- ex. 3개의 알파벳으로 단어를 만드는 경우의 수

```javascript
function permutation(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; i++) {
      if (i == j) continue;
      for (let k = 0; k < arr.length; k++) {
        if (i == k) continue;
        if (j == k) continue;
      }
    }
  }
}
```

```javascript
let input = ["a", "b", "c"];
let count = 0;

function permitation(arr, s, r) {
  // 재귀함수를 멈춰야 할 조건
  if (s == r) {
    count++;
    console.log(arr.join(" "));
    return;
  }

  // 재귀를 돌면서 변경되어야 할 부분 (메인 로직)
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]]; // swap
    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // 원상복귀
  }
}

permutation(input, 0, 2);
console.log(count);
```

---

## 조합

- 서로 다른 n개의 원소 중에서 r개를 중복 없이 골라 순서에 상관없이 나열하는 경우의 수 (nCr)
- ex. 4개의 숫자 카드에서 2개를 뽑는 경우

```javascript
let input = [1, 2, 3, 4];
let count = 0;

function combination(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      console.log(arr[i], arr[j]);
    }
  }
}

combination(input);
console.log(count);
```

### 재귀함수를 이용한 조합

```javascript
let input = [1, 2, 3, 4];
let output = [];
let count = 0;

function combination(arr, data, s, idx, r) {
  if (s == r) {
    count++;
    console.log(data);
    return;
  }

  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combination(arr, data, s + 1, i + 1, r);
  }
}

combination(input, output, 0, 0, 2);
console.log(count);
```

---

## 점화식 (재귀식)

- 이웃하는 두 개의 항 사이에 성립하는 관계를 나타낸 관계식

### 대표적인 점화식

- 등차 수열
- 등비 수열
- 팩토리얼
- 피보나치 수열

### 등차 수열

```javascript
let result;

function forloop(s, t, number) {
  let acc = 0;

  for (let i = 1; i <= number; i++) {
    if (i == 1) {
      acc += s;
    } else {
      acc += t;
    }
  }

  return acc;
}

result = forloop(3, 2, 5);
```

#### 점화식

```javascript
let result;

function recursive(s, t, number) {
  if (number == 1) {
    return s;
  }
  return recursive(s, t, number - 1) + t;
}

result = recursive(3, 2, 5);
```

### 등비 수열

```javascript
let result;

function forloop(s, t, number) {
  let acc = 1;

  for (let i = 1; i <= number; i++) {
    if (i == 1) {
      acc *= s;
    } else {
      acc *= t;
    }

    console.log(i, acc);
  }

  return acc;
}

result = forloop(3, 2, 5);
```

#### 점화식

```javascript
let result;

function recursive(s, t, number) {
  if (number == 1) {
    return s;
  }
  return recursive(s, t, number - 1) * t;
}

result = recursive(3, 2, 5);
```

### 팩토리얼

```javascript
let result;

function recursive(number) {
  if (number == 1) {
    return 1;
  }

  return recursive(number - 1) * number;
}

result = recursive(5);
console.log(result);
```

### 피보나치 수열

- f(n) = f(n-1) + f(n-2)

```javascript
function recursive(number) {
  if (number == 1 || number == 0) {
    return number;
  }

  return recursive(number - 1) + recursive(number - 2);
}

result = recursive(5);
```
