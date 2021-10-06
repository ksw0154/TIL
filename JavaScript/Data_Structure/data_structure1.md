# JavaScript [선형 자료구조1]

## 자료구조 Overview

- 선형 자료구조 : 배열, 연결 리스트(이중, 원형), 스택, 큐, 해시 테이블(선형, 체이닝, 딕셔너리), 데크
- 비선형 자료구조 : 그래프(DFS, BFS), 힙, 트리(이진트리, 이진 탐색), 트라이

---

## 배열

---

## 배열 문제 풀이 - 수열 최솟값 위치

- 여러 개체(Entity)값을 순차적으로 나열한 선형 자료구조

### 대표 속성(property)과 메서드(method)

- 배열 크기 및 여부 확인 : Array.length(), Array.isArray()
- 배열 추가 삭제 : Array.push(), Array.pop(), Array.shift(), Array.unshift(), Array.splice(), Array.slice()
- 배열 탐색 : Array.indexOf(), Array.lastIndexOf(), Array.includes()
- 배열 변형 : Array.sort(), Array.reverse(), Array.join()
- 배열 반복 : Array.sort(), Array.forEach(), Array.map(), Array.find(), Array.filter(), Array.reduce()
- 배열 논리 연산 : Array.some(), Array.every()

### 배열 선언 / 접근 / 속성

- 선언 : new Array() or []
- 접근 : Array[index] (시간 복잡도 : O(1))
- 속성 : ex. Array.length

### 배열의 실체

- Hash 기반의 객체
- 메모리가 연속적인 밀집 배열(dense array)가 아닌 비 연속적인 희소 배열(sparse array)

### 배열 타입 확인 및 요소 삭제

- 타입 확인 : Array.isArray()
- 일부 요소 삭제 : delete Array[index]
  - 삭제해도 배열 사이즈가 그대로인 문제점이 있음

### 배열 조작

- 배열 추가 / 삭제
  - LIFO (back) : Array.push(), Array.pop()
  - LIFO (front) : Array.unshift(), Array.shift()

### 배열 반복문

- for ... length (index 접근)
- for ... of (element 접근)
- for ... in (key 접근)

### 배열 탐색

- index 탐색 (앞에서부터) : Array.indexOf(item, from)
- index 탐색 (뒤에서부터) : Array.lastIndexOf(item, from)

### 배열 변형

- 배열 정렬

  - 내림차순 정렬 : Array.reverse()
  - 오름차순 정렬 : Array.sort()

- 배열 변환
  - 배열 값을 문자열로 변환 : Array.join(separator)

### some()

- 배열 내 단 하나라도 콜백 함수의 조건을 만족하는 요소가 있다면 true, 아니면 false 반환 (빈 배열 : false)

```javascript
let som_job = users.some(function (user) {
  return user.job == false;
});
```

### every()

- 배열 내 모든 요소가 콜백 함수의 조건을 만족한다면 true, 아니면 false를 반환 (빈 배열 : true)

```javascript
let every_job = users.every(function (user) {
  return user.job == false;
});

let every_age = users.every(function (user) {
  return user.age > 16;
});
```

---

## 배열 문제 풀이 - 수열 최솟값 위치

```javascript
function answer(nums) {
  let result = [];
  let min = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (min == nums[i]) {
      result.push(i);
    }
  }
  return result;
}

console.log(answer([5, 2, 10, 2]));
```

---

## 배열 문제 풀이 - 체스 세트

```javascript
function answer(chess) {
  let result = [];
  const default_chess = [1, 1, 2, 2, 2, 8];

  for (let i = 0; i < chess.length; i++) {
    result.push(default_chess[i] - chess[i]);
  }
  return result;
}

console.log(answer([2, 1, 2, 1, 2, 1]));
```

---

## 배열 문제 풀이 - 두 수 최대 합

```javascript
function answer(nums) {
  let result = [];
  nums.sort((x, y) => x - y);

  result.push(nums[nums.length - 1], nums[nums.length - 2]);
  return result;

  // user code
  result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > result[0]) {
      result[1] = result[0];
      result[0] = nums[i];
    } else if (nums[i] > result[1]) {
      result[1] = nums[i];
    }
  }

  return result;
}

console.log(answer([-11, 5, 18, -2, -3, 6, 4, 17, 10, 9]));
```

---

## 배열 문제 풀이 - 일곱 난장이

```javascript
function answer(dwarf) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < dwarf.length; i++) {
    sum += dwarf[i];
  }
  sum -= 100;

  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (sum == dwarf[i] + dwarf[j]) {
        result = [dwarf[i], dwarf[j]];
        break;
      }
    }
  }

  return result;
}

console.log(answer([1, 5, 6, 7, 10, 12, 19, 29, 33]));
```

---

## 배열 문제 풀이 - 나무 그리기

```javascript
function answer(height) {
  let str = "\n";

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height - i - 1; j++) {
      str += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      str += "*";
    }

    str += "\n";
  }

  return str;
}

console.log(answer(3));
```

---

## 배열 문제 풀이 - Two Sum

```javascript

```

---

## 배열 문제 풀이 - OX 퀴즈

---

## 배열 문제 풀이 - 벽돌 옮기기

---

## 배열 문제 풀이 - 숫자 빈도수

---

## 배열 문제 풀이 - 달팽이 만들기

---

## 프로토 타입

---

## 연결 리스트

---

## 연결 리스트 구현하기 (1)

---

## 연결 리스트 구현하기 (2)
