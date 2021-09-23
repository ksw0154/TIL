# JavaScript [Object]

## 1. 객체(Object)

- 자바스크립트는 객체 기반의 스크립트 언어
- 원시타입(Primitives)을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체

### 객체는 키(Key)와 값(Value)로 구성된 프로퍼티(Property)들의 집합

- 자바스크립트의 함수는 일급 객체이므로 값을 취급할 수 있다.
- 프로퍼티 값으로 함수를 사용할 수 있다.
  - 일반 함수와 구분하기 위해 메소드라고 부른다.

### 객체는 프로퍼티와 메소드로 구성된 집합

- 프로퍼티 : 객체의 데이터
- 메소드 : 데이터를 참조하고 조작할 수 있는 동작

### 프로퍼티

- 프로퍼티 키(이름)와 프로퍼티 값으로 구성된다.

#### 프로퍼티 키

- 빈 문자열을 포함하는 모든 문자열 또는 symbol 값
- 문자열이나 symbol 값 이외의 값을 지정하면 암묵적으로 타입이 변환되어 문자열이 된다.
- 이미 존재하는 프로퍼티 키를 중복 선언하면 덮어쓴다.
- 객체는 프로퍼티의 순서를 보장하지 않는다.

#### 프로퍼티 값

- 모든 값

### 메소드

- 프로퍼티 값의 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.
- 객체에 제한되어 있는 함수

## 2. 객체 생성 방법

- 기존의 자바스크립트는 프로토타입 기반 객체 지향언어로 클래스라는 개념이 없이 별도의 객체 생성 방법이 존재했다.
- `ECMAScript6에서 새롭게 클래스가 도입되었다.`

### 객체 리터럴

- 클래스 기반 객체 지향 언어와 비교할 때 매우 간편하게 객체를 생성할 수 있다.
- `중괄호({})`를 사용하여 객체를 생성한다.
- 프로퍼티가 없으면 빈 객체를 생성하고 1개 이상의 프로퍼티를 기술하면 프로퍼티가 추가된 객체를 생성한다.
- Object 생성자 함수로 객체를 생성하는 것을 단순화 시킨 short-hand

```javascript
var emptyObject = {};

var person = {
  name: "Lee",
  gender: "male",
  sayHello: function () {
    console.log("Hi! My name is " + this.name);
  },
};
```

### Object 생성자 함수

- `new` 연산자와 `Object 생성자 함수`를 호출하여 빈 객체를 생성할 수 있다.
- 생성자(Constructor) 함수 : `new` 키워드와 함께 객체를 생성하고 초기화하는 함수
- `생성자 함수를 통해서 생성된 객체를 인스턴스(instance)라고 한다.`

```javascript
var person = new Object();

person.name = "Lee";
person.gender = "male";
person.sayHello = function () {
  console.log("Hi! My name is " + this.name);
};
```

### 생성자 함수

- 프로퍼티 값만 다른 여러 개의 객체를 생성할 때 불편하다.
- 객체를 생성하기 위한 템플릿(클래스)처럼 사용하여 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있다.
- 일반적으로 대문자로 시작한다.
- `this`는 생성자 함수가 생성할 인스턴스를 가리킨다.

```javascript
function Person(name, gender) {
  var married = true; // private
  this.name = name; // public
  this.gender = gender; // public
  this.sayHello = function () {
    console.log("Hi! My name is " + this.name);
  };
}

var person1 = new Person("Lee", "male");
var person1 = new Person("Kim", "female");
```

- 생성자 함수 내에서 선언된 일반 변수는 `private`하다. (외부에서 참조 불가능)
- `new` 연산자를 붙여서 호출하면 생성자 함수로 동작한다.
  - 일반 함수에 `new` 연산자를 붙여 호출하면 생성자 함수처럼 동작할 수 있다.
  - 일반적으로 생성자 함수명은 첫문자를 대문자로 기술한다.

## 3. 객체 프로퍼티 접근

### 프로퍼티 키

- 자바스크립트에서 사용 가능한 유효한 이름인 경우 따옴표를 생략할 수 있다.
- 예약어를 프로퍼티 키로 사용하면 않된다.

```javascript
var person = {
  "last-name": "Lee",
  last_name: "Kim",
};
```

### 프로퍼티 값 읽기

- 마침표(.) 표기법과 대괄호([]) 표기법이 있다.
- 프로퍼티 키가 유효한 자바스크립트 이름이 아니거나 예약어인 경우 대괄호 표기법으로 읽어야 한다.
- 대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열이어야 한다.

```javascript
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male'
  1: 10
}

console.log(person['first-name'])
console.log(person.gender)
console.log(person[1]) // person[1] -> person['1']
```

### 프로퍼티 값 갱신

```javascript
var person = {
  "last-name": "Lee",
};

person["last-name"] = "Kim";

console.log(person["last-name"]); //'Kim'
```

### 프로퍼티 동적 생성

- 객체가 소유하고 있지 않은 프로퍼티 키에 값을 할당하면 프로퍼티를 생성하여 객체에 추가한다.

```javascript
var person = {
  "last-name": "Lee",
};

person.age = 20;
```

### 프로퍼티 삭제

- `delete` 연산자를 사용하면 객체의 프로퍼티를 삭제할 수 있다.

```javascript
var person = {
  "last-name": "Lee",
};

delete person["last-name"];
```

### `for-in` 문

- 객체(배열 포함)에 모든 프로퍼티에 대해 루프를 수행할 수 있다.

```javascript
var person = {
  "first-name": "Ung-mo",
  "last-name": "Lee",
  gender: "male",
};

for (var prop in person) {
  console.log(prop + ": " + person[prop]);
}
```

- `객체의 문자열 키(Key)를 순회하기 위한 문법이다.`
- `배열에서는 사용하지 않는 것이 좋다.`
  1. 객체의 경우, 프로퍼티의 순서가 보장되지 않는다. 배열은 순서를 보장하는 데이터구조이지만 객체와 마찬가지로 순서를 보장하지 않는다.
  2. 배열 요소들만을 순회하지 않는다.
- 이러한 단점을 극복하기 위해서 ES6에서 `for-of`문이 추가되었다.

#### `for-in은 객체의 프로퍼티를 순회하기 위해 사용`하고 `for-of는 배열의 요소를 순회하기 위해 사용`한다.

## `Pass-by-reference`

- object type을 객체 타입 또는 참조 타입이라 한다.
- 참조 타입 : 객체의 모든 연산이 실제값이 아닌 참조값으로 처리된다.
- 객체 타입은 동적으로 변화할 수 있으므로 어느 정도의 메모리 공간을 확보해야 하는지 예측할 수 없다.
  - `런타임에 메모리 공간을 확보하고 메모리의 힙 영역(Heap Segment)에 저장된다.`

```javascript
var foo = {
  val: 10,
};

var bar = foo;

console.log(foo === bar); // true
```

- foo는 객체 자체를 저장하고 있는 것이 아니라 생성된 객체의 참조값(address)를 저장하고 있다.
- bar에 변수 foo의 값을 할당하면 동일한 객체를 참조하게 된다.
- val 값이 변경되면 foo, bar 모두 동일한 객체를 참조하고 있으므로 변경된 값을 참조하게 된다.

```javascript
var bar = {
  val: 10,
};

console.log(foo === bar); // false
```

- foo와 내용은 같지만 별개의 객체를 생성하여 참조값을 할당하였기 때문에 참조값(주소)가 동일하지 않다.

```javascript
var a = {},
  b = {},
  c = {}; // a, b, c는 각각 다른 빈 객체를 참조
console.log(a === b, a === c, b === c); // false false false

a = b = c = {}; // a, b, c는 모두 같은 빈 객체를 참조
console.log(a === b, a === c, b === c); // true true true
```

## `Pass-by-value`

- 원시 타입은 값이 복사되어 전달된다.
- `런타임(변수 할당 시점)에 메모리의 스택 영역(Stack Segment)에 고정된 메모리 영역을 점유하고 저장한다.`

```javascript
var a = 1;
var b = a;

console.log(a, b); // 1 1
console.log(a === b); // true

a = 10;
console.log(a, b); // 10 1
console.log(a === b); // false
```

## 객체의 분류

- Built-in Object : 웹페이지 등을 표현하기 위한 공통의 기능을 제공
  - Standard Built-in Object (표준 빌트인 객체)
  - Native Object
    - BOM(Browser Object Model)
    - DOM(Document Object Model)
- Host Object : 사용자가 생성한 객체
  - constructor 혹은 객체 리터럴을 통해 사용자가 객체를 정의하고 확장시킨 것
  - Built-in Object와 Native Object가 구성된 이후에 구성된다.
