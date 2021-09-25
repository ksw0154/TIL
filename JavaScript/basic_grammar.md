# JavaScript [기초 문법1]

## 기본 입출력

- 사용자가 프로그램과 상호작용하기 위한 방법
- Input/Output의 머리 글자를 따서 I/O로 줄여서도 표기
- 사용자의 입력 -> PC의 연산처리 -> 모니터를 통한 출력

### 표준 입력 (stdin)

- 일반적으로 컴퓨터의 키보드의 응답을 받아 입력
- 알고리즘에서는 문제의 TestCase 입력을 위해 사용

### 표준 출력 (stdout)

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

- JavaScript는 문법의 대부분이 C, C++, Java로부터 차용하여 만들어진 스크립트 기반의 언어
- 다수의 표현식(expression)으로 하나의 명령문(statement)이 만들어진다.
- 명령문으로 프로그램이 수행된다.

```javascript
let x = 10; // statement (let, x, 10은 expression)

let y = 15;
// 명령문이 모여 프로그램이 수행된다.
```

### 키워드

- 미리 정해진 용도로 동작하기 위해 정의해 놓은 단어
- ex. char, float, if, long 등

### 식별자

- 스크립트에서 변수나 함수에 이름을 붙일 때 사용하는 단어
- 대소문자를 구별한다.
- 키워드 사용 불가, 숫자로 시작 불가, 특수문자는 \_와 $만 허용, 공백 문자 포함 불가

```javascript
const algo123 = 1; // 식별자 : algo123
```

### 주석

- 단일 행 주석(//)과 다중 행 주석(/\* \*/)이 존재한다.

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
- var의 변수 / 함수의 선언만 위로 올려지고, 할당은 올려지지 않음
- let / const 변수 선언과 함수 표현식에서는 호이스팅이 발생하지 않음

```javascript
console.log(x); // undefined
var x = 10;

console.log(y); // ReferenceError 발생 (초기화 전에는 접근할 수 없다.)
let y = 10;
```

#### 실제 호이스팅 동작 코드

```javascript
console.log(x);
var x = 10;

// 위의 코드가 호이스팅이 적용되어서 실행될 때
var x;
console.log(x);
x = 10;
```

---

## 자료형
