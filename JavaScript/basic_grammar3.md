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

---

## Number

---

## String

---

## 문자열 변환

---

## Array

---

## 배열 조작

---

## 배열 탐색 - 변형
