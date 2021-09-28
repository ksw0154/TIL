# JavaScript [기초 문법3]

## 함수

- 다수의 명령문을 코드 블럭으로 감싸고 하나의 실행 단위로 만든 코드의 집합
- 유사한 동작을 하는 코드를 하나로 묶어서 범용성을 확대시킨 블럭 코드
- 함수는 정의 부분과 호출 부분으로 구성한다
- `함수는 가급적으로 한가지 일만 하며, 매개변수는 최대 3개 이내로 작성을 권장한다.`

```javascript
// 함수 정의
function add(x, y) {
  // add : 함수 이름, x, y : 매개 변수
  return x + y; // 반환 결과
}

// 함수 호출
add(10, 20); // (10, 20) : 인자
```

### 함수 정의

#### 1. 함수 선언식

```javascript
function add(x, y) {
  return x + y;
}
```

#### 2. 함수 표현식

- 함수 이름이 없다.

```javascript
const add = function (x, y) {
  return x + y;
};
```

#### 3. 화살표 함수

- 매개변수만 받고 결과값만 나타낸다.

```javascript
const add = (x, y) => x + y;
```

### 함수 호출

- 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
- `ES6`에서 도입된 기본값을 통해 `undefined` 변수가 들어올 경우 값 초기화 지정 가능하다.

#### default 값

```javascript
function print_add(x, y = 10) {
  // default value
  console.log(x + y);
}

print_add(10); // 20
// y의 값이 undefined이기 때문에 default 값인 10이 대입된다.
```

#### Dynamic Parameters

```javascript
function print_add(x, y) {
  console.log(arguments);
}

print_add(10, 20, 30, 40); // [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40 }
```

### 조건문과 함수

```javascript
function checkAge(age) {
  if (age >= 18) return true;
  else return false;
}
```

---

## 재귀 함수

- 함수 스스로 자신을 참조해 호출하면서 동일한 코드가 계속적으로 수행되는 함수 호출 방법
- 특정 조건이 됐을 때 자신을 그만 호출되도록 제한하는 `exit code`가 필요하다.

```javascript
function recursive(num) {
  if (num == 0) return 0;
  return num + recursive(num - 1);
}

function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
```

---

## 콜백 함수

- 다른 함수의 매개변수로 전달되어 수행되어지는 함수 (넘어가는 함수)
- 고차 함수 : 매개변수를 통해 함수를 받아 호출하는 함수 (받아서 실행하는 함수)

```javascript
function callback_func() {
  console.log("I'm callback function");
}

function higher_order_func(callback) {
  console.log("I'm higher-order function");
  callback();
}

higher_order_func(callback_func);
// 매개변수는 callback_func의 주소값
```

### callback 함수 예제

```javascript
//callback function (add, sub, mul, div)

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

// higher-order-function
function calculator(callback, x, y) {
  return callback(x, y);
}

console.log(calculator(add, 7, 3));
```

### `call by value`

- `값에 의한 복사`로 함수 내에서 매개 변수 값을 변경시켜도 영향이 미치지 않음
- 원시 타입 `primitive type`을 매개변수로 넘겼을 때 발생

```javascript
let a = 1;
let add = function (b) {
  b += 1;
};
add(a);
console.log(a); // output: 1
```

### `call by reference`

- `주소에 대한 복사`로 함수 내에서 매개 변수 내 값을 변경시키면 원본 데이터에도 영향을 받음
- 객체 타입`object type`을 매개 변수로 넘겼을 때 발생

```javascript
var a = {
  v: 1,
};

var add = function (b) {
  b.v += 1;
};

add(a);
console.log(a.v); // output: 2
```

---

## 연습문제

### 두 정수를 입력 받아 가장 큰 값을 출력해주는 함수를 작성하시오.

```javascript
function MAX(x, y) {
  // 조건문 사용
  if (x > y) {
    return x;
  } else {
    return y;
  }

  // 삼항 연산자 이용
  return x > y ? x : y;
}

console.log(MAX(0, 3)); // 3
console.log(MAX(-1, 5)); // 5
console.log(MAX(100, 7)); // 100
```

---

## method

### 함수의 표현

```javascript
function add_1(x, y) {
  return x + y;
}

const add_2 = (x, y) => x + y;

const add_4 = add_1;

console.log(Object.getOwnPropertyDescriptors(add_1));
console.log(Object.getOwnPropertyDescriptors(add_2));
console.log(Object.getOwnPropertyDescriptors(add_4));
```

- 화살표 함수는 내부적으로 선언하는 방식이 조금 다르다.
- 객체를 복사하게 되면 Object.getOwnPropertyDescriptors()를 사용하게 되면 동일한 name의 value를 가지게 된다.
  - add_4의 내용을 보면 name의 value가 add_1이 나온다.

#### add_4의 Object.getOwnPropertyDescriptors() 내용

```javascript
// Object.getOwnPropertyDescriptors(add_4)
{
  length: { value: 2, writable: false, enumerable: false, configurable: true },
  name: {
    value: 'add_1',
    writable: false,
    enumerable: false,
    configurable: true
  },
  arguments: {
    value: null,
    writable: false,
    enumerable: false,
    configurable: false
  },
  caller: {
    value: null,
    writable: false,
    enumerable: false,
    configurable: false
  },
  prototype: { value: {}, writable: true, enumerable: false, configurable: false }
}
```

### 함수의 저장

- 배열의 요소(element) 혹은 객체의 속성(property)에 함수를 정의하여 저장 가능하다.

```javascript
let list = [
  "john",
  27,
  function hello_func() {
    console.log("hello");
  },
];

let obj = {
  name: "john",
  age: 27,
  hello_func() {
    console.log("hello");
  },
};

function hello_func() {
  console.log("hello");
}

list[2](); // hello
obj.hello_func(); // hello
hello_func(); // hello
```

### method

- 객체에 저장된 값이 함수인 경우, 이를 메서드(method)라고 부른다.
- 객체 내의 함수(메서드)안에는 주소값이 들어있다.
- 함수의 복사는 객체의 복사와 동일하다.
  - 함수도 객체이기 때문이다.

### this

- 메서드에서 객체 내부의 속성(property) 값을 접근할 수 있는 지시자

```javascript
let user = { name: "john" };
let admin = { name: "admin" };

function hello_func() {
  console.log("hello " + this.name);
}

user.func = hello_func;
admin.func = hello_func;

user.func();
admin.func();
```

---

## Number

- 10진수 외에도 16진수, 2진수, 8진수의 다양한 진수 사용
- 16진수(Hexadecimal) 표기 : 0xFF
- 8진수(Octal) 표기: 0o71
- 2진수(Binary) 표기: 0b1101

### 대표 상수값

- `[MAX|MIN]_VALUE` : 지수로 표기되는 양수 최대 / 최소 값
  - `Number.MAX_VALUE`, `Number.MIN_VALUE`
- `[MAX|MIN]_SAFE_INTEGER` : 안전하게 표기되는 최대(양수) / 최소 (음수) 값
- `[POSITIVE|NEGATIVE]_INFINITY` 무한대 양수 / 음수 값
- `NaN` : 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값으로 해석될 수 있는 숫자 데이터 유형

### 대표 메서드

- 문자열로 변환 : Number.toString() == String(Number) == Number + ""
- 특정 자리수까지 제한하여 표현
  - Number.toFixed() : 소수의 자리수 길이를 제한
  - Number.toPrecision() : 정수와 소수의 자리수를 합한 길이로 제한
- 타입 확인
  - Number.isNaN()
  - Number.isFinite() : 유한수인지 확인하기 위한 메서드
- 정수와 실수 형 변환
  - 정수로 변환하는 방법 : Number.parseInt()
  - 실수로 변환하는 방법 : Number.parseFloat()

```javascript
console.log(Number.parseInt("125px")); // 125
console.log(Number.parseFloat("1.25em")); // 1.25
```

### 지수 / 진법

```javascript
// 지수 기법
console.log(1e9); // 100000000
console.log(1e-6); // 0.000001

// 진법 표기
console.log(0x0f); // 15
console.log(0o17); // 15
console.log(0b1111); // 15
```

---

## String

- 텍스트 길이에 상관없이 문자열 형태로 저장되는 자료형
- 글자 하나만 저장할 수 있는 char 자료형이 없다.
- 자바스크립트 문자열은 페이지 인코딩 방식과 상관없이 항상 UTF-16 형식을 따른다.

### 대표 속성(property)와 메소드(method)

- 문자열의 길이 : String.length
- 문자열 접근 : String.charAt(index), String.charCodeAt(index)
- 문자열 검색 : String.indexOf(), String.lastIndexOf(), String.includes(), String.startsWith() 등
- 문자열 변환 : String.toUpperCase(), String.toLowerCase()
- 문자열 치환 : String.replace()
- 문자열 추출 : String.slice(), String.substring(), String.substr()
- 문자열 분할 : String.split()

### 문자열 정의 / 표기

```javascript
let str = "Hello_1";
let str2 = String("Hello_2");
let num = 3;
let str3 = `Hello_${num}`;

console.log(str);
console.log(str2);
console.log(str3);

console.log("line\nfeed");
console.log("carriage\rreturn");
console.log("backslash \\");
console.log("tab\ttab");
console.log("smile: \u{1F60D}");
```

### 문자열 길이 / 접근

```javascript
let str = `hello
world
!!!`;
let newline_string = "hello\nworld\n!!!";

// 문자열 길이
console.log(str.length); // 15
console.log(newline_string.length); // 15

// 문자 접근
console.log(str.charAt(1)); // e
console.log(str.charCodeAt(1)); // 101 (해당 문자에 대한 아스키 코드값)
console.log(str[1]); // e
```

### 문자열 검색 / 변환

- 문자열 검색(return index)

```javascript
let text = "hello, world!!!";

console.log(text.indexOf("l")); // 2
console.log(text.indexOf("l", 3)); // 3 (검색 시작 위치를 지정할 수 있다.)
console.log(text.lastIndexOf("o")); // 8 (뒤에서부터 탐색을 진행한다.)
```

- 문자열 검색(return bool)

```javascript
let text = "hello, world!!!";

console.log(text.includes("hello")); // 대소문자를 구분한다.
console.log(text.startsWith("ello", 1)); // 해당 문자열로 시작하는지 확인한다. 1이 없으면 false 값이 나온다.
console.log(text.endsWith("!!!")); // 해당 문자열로 끝나는지 확인한다.
```

---

## 문자열 변환

- 문자열 변환 : String.toUpperCase(), String.toLowerCase()
- 문자열 치환 : String.replace()
  - 원본 문자열은 변경되지 않는다.
  - 정규표현식을 사용하지 않으면 찾은 1개의 문자열만 변경한다.
- 문자열 추출 : String.slice(), String.substring(), String.substr()
- 문자열 분할 : String.split()

### 문자열 치환

```javascript
let text = "hello, world!!!";

console.log(text.replace("world", "earth")); // hello, earth!!!
console.log(text.replace(/l/gi, "")); // g : 전체, i : 대소문자를 구분하지 않는다. heo, word!!!
```

### 문자열 추출

- 위치 기반 문자열 추출 : String.slice(start, end), String.substring(start, end)
- 길이 기반 문자열 추출 : String.substr(start, length)

```javascript
let text = "hello, world!!!";

console.log(text.slice(2, 6)); // llo,
console.log(text.substring(2, 6)); // llo,
console.log(text.substring(6, 2)); // llo, // start, end index가 자동으로 바뀐다.
console.log(text.substr(2, 6)); // llo, w
```

### 문자열 분할

```javascript
let text = "hello";

console.log(text.split("")); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(text.split("", 3)); // [ 'h', 'e', 'l' ]
```

---

## Array

- 여러 개체(Entity)값을 순차적으로 나열한 자료구조
  - 알고리즘 내 사용 빈도가 많음
  - 배열 내 값을 요소(element), 배열 요소는 index로 접근
- 연속된 메모리 공간을 가지고 있는 모양 (실제로 자바스크립트는 연속된 메모리 공간이 아니다.)
- 자바스크립트에서는 배열은 Hash 기반의 객체 (비 연속적인 희소 배열[sparse array])

### 대표 속성과 메서드

- 배열 크기 및 배열 여부 확인 : Array.length, Array.isArray()
- 배열 추가/삭제 : Array.push(), Array.pop(), Array.shift(), Array.unshift(), Array.spice(), Array.slice() 등

  - Array.push(), Array.pop() : 배열의 마지막 인덱스에서 이루어지는 메서드
  - Array.shift(), Array.unshift() : 배열의 시작(0) 인덱스에서 이루어지는 메서드

### 배열 선언/접근/속성

- 선언 : new Array() or []
- 접근 : `Array[index]`, 시간복잡도 : O(1)
- 배열 속성 : Array.length를 통해 배열 요소의 개수 확인 가능

### 배열의 실체

- 연속적인 밀집 배열이 아니라 비 연속적인 희소 배열(sparse array)
- 자바스크립트에서 배열은 다른 언어에서 말하는 일반적인 배열이 아닌 Hash 기반의 객체

```javascript
let nums = [];

nums[0] = "one";
nums[1] = "two";

nums["once"] = "once";
nums["twice"] = "twice";

console.log(nums); // [ 'one', 'two', once: 'once', twice: 'twice' ]
console.log(Object.getOwnPropertyDescriptors(nums));
```

### 배열 타입 확인 및 요소 삭제

- 배열에서 delete를 잘 사용하지 않는다.
  - 배열의 원소의 값은 없어지고 해당 index는 남아있다.

```javascript
let fruits = ["apple", "orange", "banana"];

console.log(Array.isArray(fruits)); // true

console.log(fruits); // [ 'apple', 'orange', 'banana' ]
delete fruits[1]; // 배열의 해당 index는 값이 없는 상태로 남아있다..
console.log(fruits); // [ 'apple', <1 empty item>, 'banana' ]
console.log(fruits.length); // 3
console.log(fruits[1]); // undefined
```

---

## 배열 조작

### 배열 추가/삭제 (LIFO - Back)

- 배열 추가 : Array.push(element)
- 배열 삭제 : Array.pop()

```javascript
let fruits = ["apple", "orange", "banana"];

fruits.push("pineapple");
console.log(fruits); // ["apple", "orange", "banana", "pineapple"];

const pop_item = fruits.pop();
console.log(pop_item); // pineapple
console.log(fruits); // ["apple", "orange", "banana"];
```

### 배열 추가/삭제 (LIFO - Front)

```javascript
let fruits = ["apple", "orange", "banana"];

fruits.unshift("watermelon");
console.log(fruits); // [ 'watermelon', 'apple', 'orange', 'banana' ]

const shift_item = fruits.shift();
console.log(shift_item); // watermelon
console.log(fruits); // [ 'apple', 'orange', 'banana' ]
```

### 배열 삭제/변경(index)

- Array.splice(index) : 매개변수로 받은 index 이후로 array를 반환한다.

```javascript
let fruits = ["apple", "orange", "banana"];

let splice_item = fruits.splice(1);
console.log(fruits); // [ 'apple' ]
console.log(splice_item); // [ 'orange', 'banana' ]

fruits.splice(1, 1); // index 1번부터 1개의 원소를 삭제한다.

fruits.splice(1, 1, "mango", "kiwi"); // index 1번부터 1개의 원소를 삭제하고 mango, kiwi를 원소로 추가한다.
```

### 배열 삭제(index)

- Array.slice([start], [end])는 원래 객체는 변하지 않는다.
- end는 포함하지 않는다 (0, 2)면 0번째 인덱스 값부터 1번째 인덱스 값까지만 삭제한다.
- start, end가 둘 다 작성되면 범위에 있는 값을 반환한다.

```javascript
let fruits = ["apple", "orange", "banana"];

console.log(fruits.slice(1)); // [ 'orange', 'banana' ] (index 1번부터 끝까지)
console.log(fruits); // [ 'apple', 'orange', 'banana' ]
console.log(fruits.slice(0, 1)); // [ 'apple' ]
```

### 배열 병합

- Array.concat(arg1, arg2 ...)
- 원본 데이터에는 영향을 미치지 않는다.
- 여러 원소를 넣으려면 원소를 넣을 때 배열 형식으로 넣어야 한다.
- Array = Array.concat(arg1, arg2 ...) 형식으로 병합한 Array를 대입해줘야 한다.

```javascript
let fruits = ["apple", "orange", "banana"];

fruits = fruits.concat(["strawberry", "mango"]);
console.log(fruits); // [ 'apple', 'orange', 'banana', 'strawberry', 'mango' ]
```

### 배열 반복문

- 다양한 반복문을 통해 배열 요소에 접근 가능
- for length(index), for-of(element), for-in(key)

```javascript
let fruits = ["apple", "orange", "banana"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

for (let key in fruits) {
  console.log(fruits[key]);
}
```

---

## 배열 탐색 - 변형
