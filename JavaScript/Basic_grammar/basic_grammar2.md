# JavaScript [기초 문법2]

## 산술대입 연산자

### 연산자

- 프로그램에서 데이터를 처리하여 결과를 산출할 목적으로 사용하는 문자
- 연산자 우선순위에 따라 결과가 다르게 나타난다.

#### 단항 연산자

- 부호, 증감, 논리, 비트 등

#### 이항 연산자

- 산술, 대입, 비교, 논리 등

#### 삼항 연산자

- (조건) ? true : false

### 산술 연산자

- 수학적 계산을 위해 제공하는 연산자
- `+`, `-`, `*`, `/`, `**`, `%`

### 대입 연산자

- 계산한 결과를 하나의 변수에 저장하기 위한 연산자

```javascript
let num = 10;
```

### 복합 대입 연산자

- 산술 연산자로 피연산자를 계산해 결과값을 한 번에 대입시켜주는 연산자.

```javascript
let num = 10;

let num2 = 11;

num += num2; // num = num + num2
num -= num2;
```

## 증가, 감소 연산자

- 숫자를 1만큼 증가시키거나 감소시킬 때 사용되는 연산자
- 증가 연산자 : ++(피연산자), (피연산자)++
- 감소 연산자 : --(피연산자), (피연산자)--

```javascript
let num, result;

num = 10;
result = num++;
console.log(num); // 11
console.log(result); // 10

num = 10;
result = --num;
console.log(num); // 9
console.log(result); // 9
```

- 피연산자 뒤에 작성된 경우에는 대입연산자가 먼저 반영되고 증가 연산자가 반영됐다.
- 증가, 감소 연산자가 피연산자 앞에 작성된 경우 증가, 감소 연산자가 먼저 반영되고 대입 연산자가 반영된다.

---

## 비교논리 연산자

### 비교 연산자

- 좌항과 우항의 피연산자를 비교한 다음 결과값을 논리적인 자료형으로 반환하는 연산자
- `==`은 값의 같음을 비교하는 동등비교, `===`는 자료형까지 같음을 판단하는 일치 비교 연산자

```javascript
const x = 123;
const y = "123";

console.log(x == y); // true
console.log(x === y); // false

const x = 1234;
const y = "123";

console.log(x > y); // true

console.log("hello" < "hi"); // true
// e보다 i가 뒤에 있기 때문에 true 값을 반환한다.
// 길이보다 문자 위치의 비교가 끝난 시점에서 비교 논리 연산자가 끝난다.

console.log(true === 1); // false
// 값은 같지만 자료형이 같지 않아서 false를 반환한다.
```

- 비교 연산자의 피연산자는 암묵적인 형변환이 일어나기 떄문에 `number`의 숫자와 `string`의 숫자의 대소 비교가 가능하다.
- 문자열 끼리의 대소 비교는 순차적으로 문자의 크기를 판단하고, 그 이후에 길이가 더 긴 문자열이 크다.

### 논리 연산자

- 좌항과 우항의 피연산자 간 논리 값을 연산하여 참 또는 거짓으로 결과를 얻는 연산자
- `&&(AND)`, `||(OR)`, `!(NOT)`
- `x && y` : x, y가 모두 true 값이어야 true가 반환된다.
- `x || y` : x 혹은 y 둘 중의 하나만 true이면 true 값을 반환한다.
- `!x` : x가 true이면 false를 false이면 true 값을 반환한다.

```javascript
console.log(1 && true); // true
consoel.log(123 || false); // true
console.log(!1234); // false
```

---

## SCOPE

- 변수 혹은 상수에 접근할 수 있는 범위
- 모듈 / 함수 내 코드에서 동일한 변수 사용시 간섭을 줄이는 용도로 사용한다.
- Scope란 Global Scope와 Local Scope의 타입으로 구분된다.

### Global Scope

- 전역에 선언되어 어디에서도 접근 가능

### Local Scope (block, function level scope)

- 특정 지역에 선언되어, 해당 지역 내에서만 접근 가능

```javascript
let x = 1;
let z = 3;

console.log(x); // 1

{
  // local scope (block)
  let x = 3;
  let y = 4;
  console.log(x); // 3
  console.log(y); // 4
  console.log(z); // 3
}

function scope() {
  // local scope (function level scope)
  let x = 5;
  let y = 6;
  console.log(x); // 5
  console.log(y); // 6
}

scope();

console.log(x); // 1
console.log(y); // ReferenceError: y is not defined
```

### SCOPE 중첩

- scope 내부의 scope의 경우 기존의 scope의 변수의 범위와 동일한 범위를 가진다.

```javascript
let x = 1;

{
  let y = 2;

  {
    let z = 3;
    console.log(z); // 3
  }
  console.log(y); // 2
  console.log(z); // Reference Error: y is not defined
}

console.log(x); // 1
console.log(y); // Reference Error: y is not defined
```

---

## 조건문

### if-else

- 알고리즘에서 논리적 비교를 할 때 사용되는 조건식
- if, if else, else 키워드를 통해 구성된다.
- 실행 문장이 단일 문장인 경우에는 {} 생략 가능

---

## 조건문 `switch`

- 표현식을 평가하여 그 값이 일치하는 `case` 문을 실행하는 조건문
- `switch`, `case`, `break`, `default` 키워드를 통해 구성된다.
- `switch`의 조건에 맞는 `case` 구문을 수행한다.
- 일반적으로 하나의 `case`만 수행되도록 `case` 끝을 `break`로 끝맺는다.

```javascript
let day_number = 1;
let day = "";

switch (day_number) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  default:
    break;
}

console.log(day); // Monday
```

- `break` 문이 없을 때는 `break` 문이 나올때까지 `case`를 다 실행한다.

---

## 연습문제

- `switch` 문을 통해 요일을 반환하는 `switch` 문

```javascript
const day = 3;
let weekend = "";

switch (day) {
  case 1:
    weekend = "월요일";
    break;
  case 2:
    weekend = "화요일";
    break;
  case 3:
    weekend = "수요일";
    break;
  case 4:
    weekend = "목요일";
    break;
  case 5:
    weekend = "금요일";
    break;
  case 6:
    weekend = "토요일";
    break;
  case 7:
    weekend = "일요일";
    break;
}

console.log(weekend);
```

---

## 반복문

### 반복문 `for`

- 선언문(Init Expression), 조건문(Test Expression), 증감문(Update Expression) 형태로 이루어진 반복문
- 조건문이 fail이 되기 전까지 코드 블럭을 계속적으로 반복 수행
- 선언문, 조건문, 증감문 자리에 공백입력 가능

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i); // 0 1 2
}

for (let i = 10; i < 3; i++) {
  console.log(i); // output 없음
}

let num = 0;
for (; num < 2; ) {
  console.log(num); // 0 1
  num++;
}
```

### `이중 for` 문

```javascript
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
```

### `for-in` 문

- 객체의 `key`, `value` 형태를 반복하여 수행하는데 최적화 된 유형
- 첫 번째부터 마지막까지, 객체의 키 개수만큼 반복

```javascript
for (key in object) {
  // code
}
```

### `for-of` 문

- `Collection` 객체 자체가 `Symbol.iterator` 속성(property)을 가지고 있어야 동작 가능한 유형
- `ES6`에 새로 추가된 `Collection` 기반의 반복 구문

```javascript
const lang = "javascript";
let text = "";

for (let x of lang) {
  text += x;
  console.log(x);
}

console.log(text); // javascript
```

---

## 반복문 `while`

- 조건문이 참일 때 코드 블록을 계속해서 반복 수행하는 반복문
- 선언문과 증감문이 없다.
- `do-while` 반복문도 존재한다. (최소 한번 수행이 필요할 때 많이 사용한다.)

```javascript
let i = 0;

while (i < 3) {
  console.log(i); // 0 1 2
  i++;
}

do {
  console.log(i); // 3 2 1
  i--;
} while (i > 0);
```

---

## 반복문 제어

### `break`

- 반복문 수행 시 코드 블럭을 탈출할 떄 사용되는 식별자
- 다중 반복문일 경우 가장 안쪽의 반복문을 종료한다.
- `label`을 통하여 다중 반복문을 한 번에 종료할 수 있다.

```javascript
let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  text += i;
}

console.log(i); //012
```

### `continue`

- 반복문 수행 시 코드 블럭 실행을 해당 라인에서 중지하고 블록을 종료시킨다.
- 블록 코드를 종료시킨 후 반복문 내 명시된 조건을 판단한다.
- `continue` 코드 뒤를 skip하고 싶을 때 사용한다.

```javascript
let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  text += i;
}
console.log(i); // 012456789
```

### Label

- 프로그램 내 특정 영역을 지정하여 별도 이름을 붙이는 식별자
- `break`와 `continue`를 사용하는 반복문 안에서만 사용 가능하다.
- `break`, `continue` 지시자 위에 있어야 한다.
- 사용하는 것을 권장하지 않는다.

```javascript
end: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
    break end;
  }
}
```

---

## 반복문 연습문제

### `for`문을 이용해서 정수 중 짝수의 합을 구하는 코드

```javascript
const UNTIL_NUM = 10;
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}

console.log(sum); // 30
```

### `이중 for` 문을 이용해서 2 ~ 9 단까지 출력하는 코드를 작성하시오.

```javascript
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`); // 2 * 1 = 2 ... 9 * 9 = 81
  }
}
```
