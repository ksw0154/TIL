# JavaScript [기초 문법4]

---

## 고차함수

- 하나 이상의 함수를 매개변수로 취하거나 함수를 결과로 반환하는 함수

### 대표 배열 조작 메서드

- 임의정렬 : Array.sort()
- 반복작업 : Array.forEach()
- 콜백함수 결과 배열 반환: Array.map()
- 조건 만족하는 하나의 값 반환: Array.find()
- 조건 만족하는 값 배열로 반환: Array.filter()
- 누적 결과 값 반환: Array.reduce()

### sort()

- 문제점 : 일의 자리 4가 10의 자리보다 뒤쪽에 정렬
- 원인 : sort 메서드로 정렬될 때 배열의 요소가 일시적으로 문자열로 변경되어서 발생한다.
- 한계점 : 대소문자 구분 없이 정렬하고 싶지만, 대소문자 구분되어 정렬한다.
  - 오름차순으로 정렬할 때 대문자가 먼저 나오게 된다.

### 숫자 정렬

```javascript
let nums = [0, -1, 3, -2, 1, 6, 10];

let ascending_order = function (x, y) {
  return x - y; // x - y가 0보다 크면 x, y를 바꾼다.
};

let descending_order = function (x, y) {
  return y - x; // y - x가 0보다 크면 x, y를 바꾼다.
};

console.log(nums.sort(ascending_order));
console.log(nums.sort(descending_order));
```

### 문자열 정렬

```javascript
const fruits = ["apple", "orange", "Orange", "pineapple"];

let asecending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (x < y) return -1;
  else return 0;
};

let descending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x < y) return 1;
  else if (x > y) return -1;
  else return 0;
};

console.log(fruits.sort(asecending_order));
console.log(fruits.sort(descending_order));
```

### 한 번에 사용하기 (자료형 상관 없이)

```javascript
const { number } = require("yargs");

const fruits = ["apple", "orange", "Orange", "pineapple"];
const nums = [1, -1, 4, 8, 10, 20, 13, 32];

const ascending_order = (x, y) => {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();

  return x > y ? 1 : -1;
};

const descending_order = (x, y) => {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();

  return x < y ? 1 : -1;
};

console.log(fruits.sort(ascending_order));
console.log(nums.sort(ascending_order));
```

---

## 그 외 고차함수

### forEach()

- 배열 요소 별 콜백 함수 각각에 실행
  - Array.forEach(function(item, index, array){})
  - 값을 반환해주지는 않는다.

```javascript
const nums = [1, 2, 3];

nums.forEach(function (i) {
  console.log(i);
});
```

### map()

- 배열 요소 별 함수 호출 및 결과를 배열로 반환
  - Array.map(function(item, index, array){})

```javascript
let use_map = nums.map(function (item) {
  return item * 2;
});

console.log(use_map); // [ 2, 4, 6 ]
```

## find()

- 콜백 함수의 조건을 만족하는, 단 하나의 값만 반환한다.
  - Array.find(function(item, index, array){})
  - item : 배열 요소, index: 배열 위치, array : 배열
  - 콜백 함수의 조건을 제일 먼저 만족하는 값 하나만 반환한다.

```javascript
const users = [
  { name: "bob", age: 17, job: false },
  { name: "alice", age: 20, job: false },
  { name: "john", age: 27, job: true },
];

let find_job = users.find(function (user) {
  return user.name == "john";
});

console.log(find_job);
```

### filter()

- 콜백 함수의 조건을 만족하는 값을 배열로 반환한다.
  - Array.filter(function (item, index, array))
- 요소 별 함수 수행 결과값 반환

```javascript
const { filter } = require("minimatch");

const users = [
  { name: "bob", age: 17, job: false },
  { name: "alice", age: 20, job: false },
  { name: "john", age: 27, job: true },
];

let filter_job = function (item) {
  console.log(filter_job);
};

console.log(find_job);

### reduce()
```

---

## 생성자

---

## Collection

---

## Map

---

## Set

---

## Math

---

## Date

---

## N차원 Array

```

```
