# JavaScript [객체와 변경불가성(Immutability)]

## 변경불가성
- 객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴
- 함수형 프로그래밍의 핵심 원리

### 객체는 참조형태로 전달하고 전달받는다.
- 객체의 상태가 언제든지 변경될 수 있기 때문에 문제가 될 가능성도 커진다.
- 의도하지 않은 객체의 변경이 발생하는 대부분의 원인은 다른 객체에서 객체를 변경하는 것이다.

### 해결 방법
- 객체를 불변객체로 만들어 프로퍼티의 변경을 방지한다.
- 객체의 변경이 필요한 경우 참조가 아니라 방어적 복사(defensive copy)를 통해 새로운 객체를 생성한 후 변경한다.
- Observer 패턴으로 객체의 변경에 대처한다.
- ES6에서 불변 데이터 패턴을 쉽게 구현할 수 있는 기능이 추가되었다.

## 1. immutable value vs mutable value

- Javascript의 원시 타입(primitive data type)은 변경 불가능한 값이다.
  - Boolean, null, undefined, Number, String, Symbol
- 원시 타입 이외의 모든 값은 객체(Object) 타입이며 변경 가능한 값이다.

### 변경 불가능한 값
- 메모리 영역에서의 변경이 불가능하다는 뜻이다. 재할당은 가능하다.

```javascript
var str = 'hello';
str = 'world';
```
- 첫 번째 구문이 실행되면 메모리에 문자열 'Hello'가 생성되고 식별자 str은 문자열의 메모리 주소를 가리킨다.
- 두 번째 구문이 실행되면 새로운 문자열 'World'를 메모리에 생성하고 식별자 str은 이 문자열을 가리킨다.
- 두 문자열 모두 메모리에 존재한다.

### 변경 가능한 값
```javascript
var arr = [];
console.log(arr.length); // 0

var v2 = arr.push(2);    // arr.push()는 메소드 실행 후 arr의 length를 반환
console.log(arr.length); // 1
```
- 배열(객체)의 메소드 push()는 직접 대상 배열을 변경한다.
- 배열은 객체이고 객체는 변경 가능한 값이기 때문이다.

### 객체와 문자열
```javascript
var user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var myName = user.name;

user.name = 'Kim';
console.log(myName); // 'Lee'

myName = user.name; // 재할당
console.log(myName); // 'Kim'
```

- myName 변수는 String 타입이고 변경 불가능한 값이다.
- user.name의 주소를 참조하는 것이 아니라 'Lee'가 메모리에 새로 생성되고 myName은 이 문자열을 참조한다.

### Pass-by-reference
```javascript
var user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var user2 = user1;
```

- user2는 객체 타입이고 변경 가능한 값이다.
- user2.name을 변경해도 user1.name이 동시에 변경된다. 같은 주소를 참조하고 있기 때문이다.

## 2. 불변 데이터 패턴(immutable data pattern)
- 객체의 방어적 복사 (defensive copy) (Object.assign)
- 불변객체화를 통한 객체 변경 방지 (Object.freeze)

### Object.assign
- 타겟 객체로 소스 객체의 프로퍼티를 복사한다.
- 소스 객체의 프로퍼티와 동일한 프로퍼티를 타겟 객체가 가지고 있다면 소스 객체의 프로퍼티로 덮어쓰기 된다.
- ES6에서 추가된 메소드이며 Internet Explorer는 지원하지 않는다.

```javascript
// Copy
const obj = { a : 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a : 1 }
console.log(obj == copy) // false

// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1); // { a: 1, b: 2, c: 3 }
console.log(o1);     // { a: 1, b: 2, c: 3 }, 타겟 객체가 변경된다!

// Merge
const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // { a: 1, b: 2, c: 3 }
console.log(o4);     // { a: 1 }
```

- 기존 객체를 변경하지 않고 객체를 복사하여 사용할 수 있다.
- Object.assign은 완전한 deep copy를 지원하지 않는다.
- 객체 내부의 객체(Nested Object)는 Shallow copy 된다.


#### Shallow copy
```javascript
const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

const user2 = Object.assign({}, user1);
console.log(user1 === user2); // false

user2.name = 'Kim';
console.log(user1.name); // 'Lee'
console.log(user2.name); // 'Kim'

// 객체 내부의 객체(Nested Object)는 Shallow Copy된다.
console.log(user1.address === user2.address) // true

user1.address.city = 'Busan';
console.log(user1.address.city); // Busan
console.log(user2.address.city); // Busan
```

- user1과 user2는 어드레스를 공유하지 않으므로 한 객체를 변경하여도 다른 객체에 아무런 영향을 주지 않는다.
- user1 객체는 const로 선언되어 재할당은 할 수 없다.
- 객체의 프로퍼티는 보호되지 않는다. (객체의 내용은 변경할 수 있다.)

### Object.freeze

```javascript
const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// Object.assign은 완전한 deep copy를 지원하지 않는다.
const user2 = Object.assign({}, user1, {name: 'Kim'});

console.log(user1.name); // Lee
console.log(user2.name); // Kim

Object.freeze(user1);

user1.name = 'Kim'; // 무시된다!

console.log(user1); // { name: 'Lee', address: { city: 'Seoul' } }

console.log(Object.isFrozen(user1)); // true
```

- 객체의 내용을 변경할 수 없다.
- 하지만 객체 내부의 객체(Nested Object)는 변경가능하다.

### Deep freeze
- 내부 객체까지 변경 불가능하게 만들려면 Deep freeze를 사용해야 한다.
```javascript
function deepFreeze(obj) {
  const props = Object.getOwnPropertyNames(obj);

  props.forEach((name) => {
    const prop = obj[name];
    if(typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}

const user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

deepFreeze(user);

user.name = 'Kim';           // 무시된다
user.address.city = 'Busan'; // 무시된다

console.log(user); // { name: 'Lee', address: { city: 'Seoul' } }
```

### Immutable.js
- Object.assign과 Object.freeze를 사용하여 불변 객체를 만드는 방법은 번거롭고 성능상 이슈가 있어서 큰 객체에서는 사용하지 않는 것이 좋다.
- Facebook이 제공하는 Immutable.js를 사용하는 방법이 있다.
- npm을 이용하여 설치한다.
```bash
$npm install immutable
```

```javascript
const { Map } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)
map1.get('b') // 2
map2.get('b') // 50
```