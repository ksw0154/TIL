# JavaScript [Control Flow]

제어문(Control flow statment)는 주어진 조건에 따라 코드 블록을 실행하거나 반복 실행할 때 사용한다.

## 1. 블록문

- 코드 블록 또는 블록이라고 부른다.
- 하나의 단위로 취급
- 단독으로 사용 가능하나, 일반적으로 제어문이나 함수 선언문 등에서 사용한다.

```javascript
{
  // 블록문
  {
    var foo = 10;
    console.log(foo);
  }

  // 제어문
  var x = 0;
  while (x < 10) {
    x++;
  }

  // 함수 선언문
  function sum(x, y) {
    return x + y;
  }
}
```

## 2. 조건문

- 주어진 조건식의 평과 결과에 따라 코드 블럭의 실행을 결정한다.
- if-else문과 switch 문을 제공한다.

### if-else 문

- 조건식의 결과가 참, 거짓에 따라 실행할 코드 블록을 결정한다.
- boolean 값으로 참, 거짓을 구별한다.

```javascript
if (조건식) {
  // 조건식이 참일 때
} else if (조건식2) {
  // 조건식이 거짓이고 조건식2가 참일 때
} else {
  // 조건식이 거짓일 때
}
```

### 삼항 연산자

- 대부분의 if-else 문은 삼항 조건 연산자로 바꿔 쓸 수 있다.

```javascript
// 조건문
if (x % 2) {
  result = "홀수";
} else {
  result = "짝수";
}

// 삼항 조건 연산자
// x % 2의 결과값이 0 or 1이다.
var result = x % 2 ? "홀수" : "짝수";

// 삼항조건 연산자 응용
var result = num ? (num > 0 ? "양수" : "홀수") : "영";
```

- 삼항 조건 연산자는 물음표(?) 앞이 조건식이다.
- 조건식이 참이면 콜론(:) 앞에 있는 결과가, 조건식이 거짓이면 콜론(:) 뒤에 있는 결과가 대입된다.

### switch 문

- 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행순서를 옮긴다.
- 표현식의 값과 일치하는 표현식이 없다면 default 문으로 이동한다.
- default문은 옵션으로 사용할수도 있고 안할수도 있다.
- case문은 무조건 break 문과 같이 사용해야한다. 그렇지 않으면 default 문까지 모든 실행문을 실행한다.

```javascript
var month = 3;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  default:
    monthName = "Invalid month";
}

// case문 중복
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
    days = 31;
    break;
}
```

- 대부분의 경우 if-else 문으로 해결할 수 있다면 if-else를 사용하는 편이 좋다.
- switch 문이 가독성이 더 좋다면 switch 문을 사용하는 편이 좋다.

## 3. 반복문

- 주어진 조건식의 평가 결과가 참인 경우 코드 블럭을 실행한다.
- 실행 이후 조건식을 다시 검사하여 참인 경우 다시 코드 블럭을 실행한다.
- 조건문이 거짓이 될 때 까지 반복된다.

### for 문

```javascript
for (초기화식; 조건식; 증감식) {
  // 조건식이 참일 경우 실행될 문
}

for (var i = 0; i < 2; i++) {
  console.log(i);
}
```

### while 문

- 조건식의 결과가 boolean값이 아니면 강제 변환되어 논리적 참, 거짓을 구별한다.
- 조건식의 결과가 언제나 참이면 무한루프가 된다.

```javascript
var count = 0;

while (count < 3) {
  console.log(count);
  count++;
} // 0 1 2

var count = 0;

// 무한루프
while (true) {
  console.log(count);
  count++;
  // count가 3이면 코드 블록을 탈출한다.
  if (count === 3) break;
} // 0 1 2
```

### do-while 문

- 코드 블록을 실행하고 조건식을 평가한다.
- 무조건 한 번이상 코드 블록이 실행된다.

```javascript
var count = 0;

do {
  console.log(count);
  count++;
} while (count < 3);
```

### break 문

- 코드 블록을 나오는 기능을 가지고 있다.
- 레이블 문, 반복문 (for, for-in, for-of, while, do-while) 또는 switch 문의 코드 블록을 탈출한다.

#### 레이블 문 : 식별자가 붙은 문

- 실행 순서를 제어하기 위해 사용한다.
- switch문의 case 문과 default 문도 레이블 문

```javascript
foo: console.log("foo");

foo: {
  console.log(1);
  break foo;
  console.log(2);
}
```

#### 중첩 for 문 탈출

```javascript
outer: for (var a = 0; a < 3; a++) {
  for (var b = 0; b < 4; b++) {
    if (a + b === 3) break outer;
  }
}
```

- 레이블 문은 권장하지 않는다.
- 프로그램의 흐름이 복잡해져서 가독성이 나빠지고 오류를 발생시킬 가능성이 높아진다.

### continue 문

- 반복문의 코드 블록 실행 중 continue 문을 만나면 그 지점에서 중단하고 반복문의 증감식으로 이동한다.

```javascript
for (var i = 0; i < string.length; i++) {
  if (string[i] === "l") continue;
  count++; // if 문의 값이 참이면 count는 증가되지 않는다.
}
```
