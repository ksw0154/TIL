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
```

### reduce()

---

## 생성자

- 유사한 객체를 다중으로 만들 때 사용하는 함수 (타 언어의 class 개념과 유사)
- 일반적으로 생성자 함수의 첫 글자는 대문자로 시작한다.
- new 연산자를 통해서 객체를 생성한다.
- 매개변수를 받아서 유사한 객체를 만들 수 있다.

```javascript
function FishBread(flavor, price) {
  this.flavor = flavor; // 입력 받은 변수로 하겠다.
  this.price = price;
  this.base = "flour";
}

let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);
console.log(bread_2);
console.log(bread_3);
```

```javascript
function User(name) {
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
}

let result_1 = User("john");
console.log(result_1);
```

- new를 입력하지 않으면 undefined가 반환된다.
- new.target 속성을 이용해서 해당 키워드가 있는지 확인할 수 있다.
- 해당 문제를 해결하기 위해서 new가 있는 객체를 생성해서 return해준다.

---

## Collection

- 구조 혹은 비구조화 형태로 프로그래밍 언어가 제공하는 값을 담을 수 있는 공간

### 자바스크립트에서 제공하는 Collection

- Indexed Collection : Array, Typed Array
- Keyed Collection : Object, Map, Set, Weak Map, Weak Set

---

## Map

- 다양한 자료형의 key를 허용하고, key-value 형태의 자료형을 저장할 수 있는 Collection
- Object 대비 다양한 key 사용이 가능하고, 값의 추가/삭제 시 메서드를 통해 수행이 필요하다.

### Map의 대표 속성(property) 및 메서드(method)

- 생성자 : new Map()
- 개수 확인 : Map.size()
- 요소 추가 : Map.set(key, value)
- 요소 접근 : Map.get(key)
- 요소 삭제 : Map.delete(key)
- 전체 삭제 : Map.clear()
- 요소 존재 여부 확인 : Map.has(key)
- 그 밖의 메서드 : Map.keys(), Map.values(), Map.entries()

```javascript
let map = new Map();

map.set("name", "john");
map.set(1, 123);
map.set(true, "pass");

map.set("name", "john").set("age", 27);
// set 호출은 한 번에 여러개 가능하다.

console.log(map.get(true));
console.log(map.delete(1)); // key가 있으면 true 반환 없으면 false 반환
map.clear(); // 전체 삭제
console.log(map); // Map(0) {}
```

```javascript
let fruits = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["pineapple", 150],
]);

console.log(fruits);

for (let item of fruits.keys()) {
  console.log(item); // key 값 출력
}

for (let amount of fruits.values()) {
  console.log(amount); // value 출력
}

for (let entity of fruits.entries()) {
  console.log(entity); // key, value 동시에 출력
}
```

### Map <-> Object 변환

```javascript
let fruits = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["pineapple", 150],
]); // Map(3) { 'strawberry' => 50, 'banana' => 100, 'pineapple' => 150 }

// map -> Object
let fruits_obj = Object.fromEntries(fruits); // { strawberry: 50, banana: 100, pineapple: 150 }

// Object -> [key, value]
let fruits_kv = Object.entries(fruits_obj); // [ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'pineapple', 150 ] ]

// [Key, value] -> map
let fruits_map = new Map(fruits_kv); // Map(3) { 'strawberry' => 50, 'banana' => 100, 'pineapple' => 150 }
```

---

## Set

- value 만을 저장하며 중복을 허용하지 않는 Collection

### 대표 속성(property) 및 메서드(method)

- 생성자 : new Set()
- 개수 확인 : Set.size
- 요소 추가 : Set.add(value)
- 요소 삭제 : Set.delete(value)
- 전체 삭제 : Set.clear()
- 요소 존재 여부 확인 : Set.has(value)
- 그 밖의 메서드 : Set.keys(), Set.values(), Set.entires()

### 요소 추가/삭제

- 다양한 자료형을 value로 사용 가능하다.
- Set.add 호출 시 set이 반환되므로 체이닝(chaining)이 가능하다.

```javascript
let num = new Set([1, 2, 3, 4, 5]);
let string = new Set("hello");

console.log(num); // Set(5) { 1, 2, 3, 4, 5 }
console.log(string); // Set(4) { 'h', 'e', 'l', 'o' }
// 중복은 자동으로 제거된다.
```

### 반복문 사용

- 반복문은 Map과 동일하게 사용이 가능하다.
- Set.keys(), Set.values()는 동일한 결과를 나타낸다. (key가 없기 때문에)
- Set.entries()는 key, value 형태의 모습을 띄기 때문에 동일한 값으로 모습을 나타낸다.

```javascript
let string = new Set("hello");

for (let item of string.entries()) {
  console.log(item);
}

// [ 'h', 'h' ]
// [ 'e', 'e' ]
// [ 'l', 'l' ]
// [ 'o', 'o' ]
```

---

## Math

- 표준 Built-in 객체
- 수학적인 연산을 위한 속성값과 메서드를 제공하는 객체

### 대표 속성(property) 및 메서드(method)

- 오일러 상수(e) : Math.E
- PI : Math.PI
- 절대값 : Math.abs(x)
- 최대값 : Math.max(...x)
- 최소값 : Math.min(...x)
- 랜덤 난수 값 : Math.random()
- 제곱과 제곱근 : Math.pow(x, y), math.sqrt(x)
- 소수점 처리 : Math.round(x), Math.ceil(x), Math.floor(x)

### 최대값, 최소값, 절대값

```javascript
let nums = [1, -1, 4, 3, 9, 94, -8];

// apply
console.log(Math.max.apply(null, nums));
console.log(Math.min.apply(null, nums));

// spread
console.log(Math.max(...nums));
console.log(Math.min(...nums));

// abs
console.log(Math.abs(-Infinity));
```

### 속성 및 랜덤

```javascript
// property
console.log(Math.E);
console.log(Math.PI);

// random (0 - 1 사이)
console.log(Math.random());

// 1의 자리 랜덤값 구하기
console.log(Number.parseInt(Math.random() * 10));
```

### 제곱/제곱근/소수점 처리

```javascript
// 제곱
console.log(Math.pow(2, 3)); // 8

// 제곱근
console.log(Math.sqrt(9)); // 3

// 반올림
console.log(Math.round(3.5)); // 4

// 올림
console.log(Math.ceil(1.2)); // 2

// 내림
console.log(Math.floor(3.9)); // 3
```

---

## Date

- 표준 Built-in 객체로써 날짜와 시간을 위한 속성값과 메서드를 제공하는 객체

### 생성자 및 대표 메서드(method)

- 생성자 : new Date()
- 현재 시간 기준 문자열 : Date()
- 날짜 정보 얻기 (년/월/일) : Date.getFullYear(), Date.getMonth(), Date.getDate()
- 날짜 정보 얻기 (시/분/초/ms) : Date.getHours(), Date.getMinutes(), Date.getSeconds()
- 날짜 정보 설정 (년/월/일) : Date.setFullYear(), Date.setMonth(), Date.setDate()
- 날짜 정보 설정 (시/분/초/ms) : Date.setHours(), Date.setMinutes(), Date.setSeconds()
- 그 외 날짜 정보 얻기 : Date.getDay(), Date.getTime(), Date.getTimezoneOffset()
- 그 외 날짜 정보 설정 : Date.parse(string)

### 날짜 정보 얻기

```javascript
let date_now = new Date();

console.log(date_now); // object
console.log(Date()); // string

let one_date_after = new Date(1000 * 3600 * 24);
console.log(one_date_after); // 1970-01-02T00:00:00.000Z

let date_string = new Date("2020-01-01");
console.log(date_string);

// month: 1월(0) ~ 12월(11)
let date_param = new Date(2021, 0, 1);
console.log(date_param); // 2020-12-31 15:00로 출력된다. (기준 시가 다르기 때문에)
let date_param2 = new Date(Date.UTC(2021, 0, 1)); // UTC 보정
console.log(date_param2); // 2021-01-01T00:00:00.000Z

const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth()); // 9월은 8로 반환
console.log(date.getDay()); // 요일 일(0) ~ 토 (6)
console.log(date.getTime()); // ms로 시간을 받음
console.log(date.getTimezoneOffset()); // UTC 0기준으로 우리나라와의 시간 차이를 얻을 수 있다.
```

### 날짜 정보 설정

#### parse

- 문자열 기반 날짜 정보 설정 : Date.parse(YYYY-MM-DDTHH:mm:ss.sssZ)
  - 반환되는 값은 ms
- T: 구분 기호
- Z(option): 미 설정할 경우 현재 로컬 기준 UTC로, 설정할 경우 UTC+0 기준으로 시간이 설정된다.

```javascript
let date = new Date();

date.setDate(1);
console.log(date); // 2021-09-01T05:47:57.163Z
date.setDate(0); // 1일 기준의 전날로 설정이 된다.
console.log(date); // 2021-08-31T05:47:57.163Z

date.setHours(date.getHours() + 2);
console.log(date); // 2시간 추가된다.

let ms_parse = Date.parse("2020-03-31T00:00:00.000");
console.log(ms_parse); // 1585580400000

console.log(new Date(ms_parse)); // 2020-03-30T15:00:00.000Z
console.log(new Date(Date.parse("2020-03-31T00:00:00.000Z"))); // 2020-03-31T00:00:00.000Z
```

### benchmark

- 알고리즘 성능 측정

```javascript
function dateSub(old_date, new_date) {
  return new_date - old_date;
}

function getTimeSub(old_date, new_date) {
  return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_function) {
  let date_1 = new Date("2020-01-01");
  let date_2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) {
    callback_function(date_1, date_2);
  }
  return Date.now() - start;
}

console.log("dateSub: " + benchmark(dateSub) + "ms"); // dateSub: 38ms
console.log("getTimeSub: " + benchmark(getTimeSub) + "ms"); // getTimeSub: 5ms
```

- 시간을 계산할 때는 ms로 바꿔서 계산하는 것이 훨씬 빠르다

---

## N차원 Array

- 배열 안에 N개 만큼의 배열이 존재하는 객체
- 2/3차원 지도 정보, RGB를 저장하는 2차원 사진 파일 등을 표현할 때 활용 가능

```javascript
let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

let array_2 = array.pop(); // 맨 뒤에 있는 요소
console.log(array_2);

array.push([401, 402, 403]);
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]
```
