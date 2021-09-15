# JavaScript [타입 변환과 단축 평가]

## 1. 타입 변환

- 자바스크립트의 모든 값은 타입이 존재한다.
- 개발자, 자바스크립트 엔진(암묵적)에 의해 변환된다.

### 명시적 타입 변환(Explicit coercion) or 타입 캐스팅(Type casting)

- 개발자에 의해 의도적으로 값의 탕비이 변환하는 것

```javascript
var x = 10;

var str = x.toString(); // 숫자를 문자열로 type casting한다.
console.log(typeof str); // string
console.log(typeof x); // number
```

### 암묵적 타입 변환(Implicit coercion) or 타입 강제 변환(Type coercion)

- 동적 타입 언어인 자바스크립트는 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다.

```javascript
var x = 10;

var str = x + "";

console.log(typeof str, str); // string 10

console.log(x); // number 10
```

- 타입 변환이 기존 값을 직접 변경하는 것은 아니다.
- 변수 : 저장된 메모리 공간의 주소를 기억하도록 한다.

- 암묵적 타입 변환은 입력된 변수를 자바스크립트 엔진이 표현식을 에러없이 평가하기 위해서 기존 값을 바탕으로 새로운 타입의 값을 만들어서 사용하고 버린다.
- var str = x + "";의 경우는 x를 숫자값 바탕으로 문자열 값("10")을 생성하고 전체 표현식을 평가한다.
- 문자열 "10"은 아무도 참조하지 않으므로 가비지 컬렉터에 의해 메모리에서 제거 된다.

- 명시적 타입 변환은 개발자의 의지가 명확히 드러난다.
- 암묵적 타입 변환이 발생하는지, 발생한다면 어떤 타입의 값으로 변환되는지, 타입 변환된 값으로 표현식은 어떻게 평가가 될 것인지 예측 가능해야 한다. 그래야 버그를 생산할 가능성이 낮아진다.

## 2. 암묵적 타입 변환

```javascript
// 표현식이 문자열 타입이여야 하는 컨텍스트
"10" + 2; // '102'

// 표현식이 모두 숫자 타입이여야 한다.
5 * "10"; // 50

// 표현식이 boolean 타입이여야 한다.
!0; // true
```

### string 타입으로 변환

- `+` 연산자는 피연산자 중 하나 이상이 string 타입이면 문자열 연결 연산자로 동작한다.
- 문자열 연결 연산자로 동작하기 위해서 피연산자 중 문자열 타입이 아닌 피연산자는 암묵적으로 문자열로 변환한다.
- number, boolean, null, undefined, object 타입은 문자열 타입으로 암묵적 타입 변환을 수행한다.
- symbol 타입의 경우 TypeError가 발생한다.

### number 타입으로 변환

- `-`, `*`, `/` 모두 산술 연산자이다.
- 산술 연산자의 역할은 숫자 값을 만드는 것이다.
- 자바스크립트 엔진은 산술 연산자 표현식을 평가하기 위해서 숫자타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.
- 피연산자를 숫자 타입으로 변환할 수 없는 경우에는 산술 연산을 수행할 수 없으므로 NaN을 반환한다.

```javascript
1 - "1"; // 0
1 * "10"; // 10
1 / "one"; // NaN
```

#### 비교 연산자

- 피연산자의 크기를 비교하므로 컨텍스트 상 숫자 타입이여야 한다.
- 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환을 한다.

```javascript
"1" > 0; //true
```

- 빈 문자열, 빈 배열, null, false는 0으로 true는 1로 변환된다.
- 객체와 빈 배열이 아닌 배열, undefined는 변환되지 않아 NaN이 된다.

### boolean 타입으로 변환

- 논리적 참, 거짓을 반환해야 하는 표현식
- 제어문 조건식의 평가 결과를 boolean 타입으로 암묵적 타입 변환한다.

- false 값 : false, undefined, null, 0, -0, NaN, ''(빈 문자열)
- true 값 : false 값 이외의 값

## 3. 명시적 타입 변환

- 래퍼 객체 생성자 함수를 new 연산자 없이 호출하는 방법
- 자바스크립트에서 제공하는 빌트인 메소드를 사용하는 방법
- 암묵적 타입 변환

### string 타입으로 변환

1. String 생성자 함수를 new 연산자 없이 호출하는 방법
2. Object.prototype.toString 메소드를 사용하는 방법
3. 문자열 연결 연산자를 이용하는 방법

```javascript
// String 생성자 함수를 new 연산자 없이 호출
String(1);

// Object.prototype.toString
(1).toSting();

// 문자열 연결 연산자
1 + "";
```

### number 타입으로 변환

1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
2. parseInt, parseFloat 함수를 사용 (문자열만 변환 가능)
3. 단항 연결 연산자를 이용
4. 산술 연산자를 이용

```javascript
// Number 생성자 함수
Number("0");
Number(true); // 1

// parseInt, parseFloat 함수 사용
parseInt("0");
parseFloat("10.53");

// 단항 연결 연산자
+"0";
+"-1";
+true; // 1

// 산술 연산자
"0" * 1; // 0
```

### boolean 타입으로 변환

1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
2. ! 부정 논리 연산자를 두번 사용하는 방법

```javascript
// Boolean 생성자 함수 이용
Boolean("x"); // true
Boolean(""); // false

Boolean({}); // true
Boolean([]); // true

// ! 부정 논리 연산자를 두번 사용
!!"x"; // true

!!0; // false
```

## 4. 단축 평가

```javascript
"Cat" && "Dog"; // 'Dog'
```

- 논리곱 연산자 `&&`는 두개의 피연산자가 모두 true 일 때 true를 반환한다.
- 두 개의 피연산자가 모두 true인 시점은 'Dog'가 true일 때 이다.
- 논리곱 연산자는 논리 연산의 결과를 결정한 두 번째 피연산자의 결과 즉, 문자열 'Dog'를 그대로 반환한다.

```javascript
"Cat" || "Dog"; // 'Cat'
```

- 논리합 연산자 `||`은 피연산자 중 하나만 true여도 true를 반환한다.

```javascript
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  str = str || "";
  return str.length;
}

getStringLength(); // 0
getStringLength("hi"); // 2
```

- 이러한 단축 평가는 함수의 인수(argument)를 초기화 할 때 유용하다.
- 만약 str이 null인 경우에는 str.length를 참조하면 Type Error가 발생한다.
