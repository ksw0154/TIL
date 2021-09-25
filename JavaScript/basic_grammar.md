# JavaScript [기초 문법1]

## 기본 입출력

- 사용자가 프로그램과 상호작용하기 위한 방법
- Input/Output의 머리 글자를 따서 I/O로 줄여서도 표기
- 사용자의 입력 -> PC의 연산처리 -> 모니터를 통한 출력

### 표준 입력 `stdin`

- 일반적으로 컴퓨터의 키보드의 응답을 받아 입력
- 알고리즘에서는 문제의 TestCase 입력을 위해 사용

### 표준 출력 `stdout`

- 일반적으로 컴퓨터의 모니터에 문자열로 출력
- 프로그램의 실행 상태 혹은 결과를 보고 판단
- 알고리즘에서는 문제의 정답 확인 or 디버깅 용으로 사용한다.

```javascript
const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8");

console.log(input);
```

---

## 기본 용어

### 코드 구성

- `JavaScript`는 문법의 대부분이 `C, C++, Java로부터 차용하여 만들어진 스크립트 기반의 언어`
- 다수의 표현식0`expression`)으로 하나의 명령문(`statement`)이 만들어진다.
- 명령문으로 프로그램이 수행된다.

```javascript
let x = 10; // statement (let, x, 10은 expression)

let y = 15;
// 명령문이 모여 프로그램이 수행된다.
```

### 키워드

- 미리 정해진 용도로 동작하기 위해 정의해 놓은 단어
- ex. `char`, `float`, `if`, `long` 등

### 식별자

- 스크립트에서 변수나 함수에 이름을 붙일 때 사용하는 단어
- 대소문자를 구별한다.
- 키워드 사용 불가, 숫자로 시작 불가, 특수문자는 `_`와 `$`만 허용, 공백 문자 포함 불가

```javascript
const algo123 = 1; // 식별자 : algo123
```

### 주석

- 단일 행 주석 `//`과 다중 행 주석 `/* */`이 존재한다.

---

## 변수와 상수

### 변수

- 변경 가능한 값을 저장하기 위한 기억 공간(memory)
- 사용하기 전 반드시 선언 필요
- 중복 선언 불가능
- 키워드 : `let`

```javascript
let x = 10;

x = 45; // 변수 내 공간이 변경이 가능하다.

let x = 60; // Syntax Error 발생 (재할당 불가능)

let y;
y = 10;
```

### 상수

- 변경 불가능한 값을 저장하기 위한 기억 공간
- 사용하기 전 반드시 선언 필요 (보통 대문자로 표기한다.)
- 중복 선언 불가능
- 키워드 : `const`

```javascript
const x = 10;

x = 15; // Type Error 발생

const C;
c = 123; // Syntax Error 발생 (반드시 선언 필요)
```

### 호이스팅 (Hosting)

- 코드에 선언된 변수 및 함수를 유효한 범위의 코드 상단으로 끌어 올리는 작업
- `var`의 변수, 함수의 선언만 위로 올려지고, 할당은 올려지지 않음
- `let` / `const` 변수 선언과 함수 표현식에서는 호이스팅이 발생하지 않음

```javascript
console.log(x); // undefined
var x = 10;

console.log(y); // ReferenceError 발생 (초기화 전에는 접근할 수 없다.)
let y = 10;
```

#### 실제 호이스팅 동작 코드

```javascript
console.log(x); // undefined
var x = 10;

// 위의 코드가 호이스팅이 적용되어서 실행될 때
var x;
console.log(x);
x = 10;
```

---

## 자료형

- 목적에 따라 특별한 성질이나 정해진 범주를 갖고 있는 데이터의 종류
- 6가지의 원시 타입 자료형과 1가지의 객체 타입 자료형으로 구성

### 원시 타입 (`primitive type`)

#### `Boolean`

- 논리적 값으로 `true`, `false`
- 주로 조건문 등에서 동작 판단의 기준으로 사용한다.

#### `null`

- 존재하지 않거나 유효하지 않은 주소 표시
- 값이 비어 있다는 의미
- 존재하지 않는(nothing), 비어 있는(empty), 알 수 없는(unknown) 값을 나타내는 데 사용한다.
- `typeof null`은 `object`로 나오게 되는데 하위 호환성 때문에 `object`로 표시된다.

#### `undefined`

- 선언 후 값을 할당하지 않은 변수
- 변수 선언 후 초기화 하지 않는다면 자동으로 할당

#### `number`

- 정수, 실수 등의 숫자
- `Infinity`, `-Infinity`, `NaN(Not a Number)`와 같은 특수 숫자 값이 포함된다.
- 2의 53승 - 1 보다 큰 값을 사용하고 싶다면 `bigint` 자료형 사용이 필요하다.
- 부동 소수점 연산이 완벽하지는 않다.

  - `toFixed(인자값)` 함수를 이용하면 인자값을 반올림해서 사용할 수 있다.

- `Infinity`는 1 / 0과 같은 수식의 결과값으로 나타난다.
- `NaN`은 number / string 과 같은 수식의 결과값으로 나타난다.

#### `string`

- 빈 문자열이나 글자들을 표현하는 문자열
- 큰 따옴표, 작은 따옴표, 역 따옴표(백틱)을 사용할 수 있다.
- 백틱은 문자열 안에 변수를 넣을 수 있다.
  - `Hello ${user1}`

#### `symbol`

- 문자열과 함께 객체 property로 사용, ES6에 추가

#### `typeof`

- 인수의 자료형을 반환하는 연산자
- `typeof x` or `typeof(x)`로 문법을 지원한다.

### 객체 타입 (object type)

- `object` : 두 개 이상의 복잡한 개체 저장 가능

---

## 객체 타입

- 다수의 원시 자료형을 포함하거나 복잡한 개체(entity)를 표현할 수 있는 자료형
- 객체 내부에 개체가 직접적으로 저장되는 것이 아니다.
- `Object`의 개체는 `key: value` 형태로 표현하며, 접근은 `object.key` 형태로 표현한다.

```javascript
let user = {
  name: "john",
  age: 27,
};

console.log(user.name);
console.log(user["name"]);
```

- user 내부에는 메모리에 대한 주소값이 저장되어 있다.
- 실질적인 데이터(개체)에 접근하기 위한 주소값

### `user.name` 접근 방법

- 객체가 가지고 있는 주소값을 통해서 해당 메모리로 접근한다.
- 접근한 메모리에서 `key`(name)를 통해서 해당 데이터에 접근할 수 있다.
- 해당 접근 방식을 통해서 값을 변경한다.

### 객체의 개체(entity) 추가 및 제거

```javascript
let user = {
  name: "john",
  age: 27,
};

// 개체 추가
user.weight = 82;

// 개체 제거
delete user.age;
console.log(user); // { name: 'john', weight: 82 }
```

---

## 객체 복사 문제점

### `object` 복사

- `object`의 값을 복사할 때는 전체가 아닌 `object` 내 주소 값만 복사되는 문제가 발생한다.

```javascript
const user = {
  name: "john",
  age: 27,
};

let admin = user;
```

- admin 객체 안에는 user 내부에 있는 주소값만 가져오게 된다.
  - 이는 같은 공간을 가리키게 된다. (name, age에 대한 내용)
  - 주소를 참조하게 되는 것
- 대상 전체를 복사해서 사용하려면 얕은 복사, 깊은 복사를 사용한다.

### 얕은 복사 `Shallow Copy`

- 객체를 새로 생성해서 값을 복사하는 것

1. 반복문 `for`를 통한 복사

```javascript
const user = {
  name: "john",
  age: 27,
};

let admin = {};

for (let key in user) {
  admin[key] = user[key];
}

admin.name = "park";
console.log(user); // { name: 'john', age: 27 }
console.log(admin); // { name: 'park', age: 27 }
```

2. `Object.assign()`을 이용한 복사

```javascript
const user = {
  name: "john",
  age: 27,
};

let admin = Object.assign({}, user);

admin.name = "kim";
console.log(user); // { name: 'john', age: 27 }
console.log(admin); // { name: 'park', age: 27 }
```

3. 전개 연산자를 통한 복사 (ES6에서부터 지원하는 연산자)

```javascript
const user = {
  name: "john",
  age: 27,
};

// 전개 연산자 사용
let admin = { ...user };

admin.name = "kim";
console.log(user); // { name: 'john', age: 27 }
console.log(admin); // { name: 'park', age: 27 }
```

### 얕은 복사 문제점

- 객체 내 또 다른 객체가 있으면 복사되지 않음 (객체 내 객체의 값(주소)을 참조하게 된다.)
- 객체 내의 또 다른 객체의 값이 주소값이기 때문에 주소값을 가져오게 된다.
- 이러한 문제를 해결하기 위해서 깊은 복사를 사용한다.

### 깊은 복사 `Deep Copy`

#### `.JSON` 객체를 이용한 깊은 복사

- `stringify` : `object`를 `string`으로 변환시킨다. (원본 객체와의 참조가 끊긴다.)
- `parse` : `string`을 `object`로 변환시킨다.
- 완벽하게 객체의 복사가 이루어진다.

```javascript
const user = {
  name: "john",
  age: 23,
  sizes: {
    height: 180,
    weight: 82,
  },
};

// 깊은 복사 Deep Copy
let admin = JSON.parse(JSON.stringify(user));

admin.sizes.height = 200;
console.log(user); // { name: 'john', age: 23, sizes: { height: 180, weight: 82 } }
console.log(admin); // { name: 'john', age: 23, sizes: { height: 200, weight: 82 } }
```
