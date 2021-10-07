# JavaScript [선형 자료구조1]

## 자료구조 Overview

- 선형 자료구조 : 배열, 연결 리스트(이중, 원형), 스택, 큐, 해시 테이블(선형, 체이닝, 딕셔너리), 데크
- 비선형 자료구조 : 그래프(DFS, BFS), 힙, 트리(이진트리, 이진 탐색), 트라이

---

## 배열

---

## 배열 문제 풀이 - 수열 최솟값 위치

- 여러 개체(Entity)값을 순차적으로 나열한 선형 자료구조

### 대표 속성(property)과 메서드(method)

- 배열 크기 및 여부 확인 : Array.length(), Array.isArray()
- 배열 추가 삭제 : Array.push(), Array.pop(), Array.shift(), Array.unshift(), Array.splice(), Array.slice()
- 배열 탐색 : Array.indexOf(), Array.lastIndexOf(), Array.includes()
- 배열 변형 : Array.sort(), Array.reverse(), Array.join()
- 배열 반복 : Array.sort(), Array.forEach(), Array.map(), Array.find(), Array.filter(), Array.reduce()
- 배열 논리 연산 : Array.some(), Array.every()

### 배열 선언 / 접근 / 속성

- 선언 : new Array() or []
- 접근 : Array[index] (시간 복잡도 : O(1))
- 속성 : ex. Array.length

### 배열의 실체

- Hash 기반의 객체
- 메모리가 연속적인 밀집 배열(dense array)가 아닌 비 연속적인 희소 배열(sparse array)

### 배열 타입 확인 및 요소 삭제

- 타입 확인 : Array.isArray()
- 일부 요소 삭제 : delete Array[index]
  - 삭제해도 배열 사이즈가 그대로인 문제점이 있음

### 배열 조작

- 배열 추가 / 삭제
  - LIFO (back) : Array.push(), Array.pop()
  - LIFO (front) : Array.unshift(), Array.shift()

### 배열 반복문

- for ... length (index 접근)
- for ... of (element 접근)
- for ... in (key 접근)

### 배열 탐색

- index 탐색 (앞에서부터) : Array.indexOf(item, from)
- index 탐색 (뒤에서부터) : Array.lastIndexOf(item, from)

### 배열 변형

- 배열 정렬

  - 내림차순 정렬 : Array.reverse()
  - 오름차순 정렬 : Array.sort()

- 배열 변환
  - 배열 값을 문자열로 변환 : Array.join(separator)

### some()

- 배열 내 단 하나라도 콜백 함수의 조건을 만족하는 요소가 있다면 true, 아니면 false 반환 (빈 배열 : false)

```javascript
let som_job = users.some(function (user) {
  return user.job == false;
});
```

### every()

- 배열 내 모든 요소가 콜백 함수의 조건을 만족한다면 true, 아니면 false를 반환 (빈 배열 : true)

```javascript
let every_job = users.every(function (user) {
  return user.job == false;
});

let every_age = users.every(function (user) {
  return user.age > 16;
});
```

---

## 배열 문제 풀이 - 수열 최솟값 위치

```javascript
function answer(nums) {
  let result = [];
  let min = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (min == nums[i]) {
      result.push(i);
    }
  }
  return result;
}

console.log(answer([5, 2, 10, 2]));
```

---

## 배열 문제 풀이 - 체스 세트

```javascript
function answer(chess) {
  let result = [];
  const default_chess = [1, 1, 2, 2, 2, 8];

  for (let i = 0; i < chess.length; i++) {
    result.push(default_chess[i] - chess[i]);
  }
  return result;
}

console.log(answer([2, 1, 2, 1, 2, 1]));
```

---

## 배열 문제 풀이 - 두 수 최대 합

```javascript
function answer(nums) {
  let result = [];
  nums.sort((x, y) => x - y);

  result.push(nums[nums.length - 1], nums[nums.length - 2]);
  return result;

  // user code
  result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > result[0]) {
      result[1] = result[0];
      result[0] = nums[i];
    } else if (nums[i] > result[1]) {
      result[1] = nums[i];
    }
  }

  return result;
}

console.log(answer([-11, 5, 18, -2, -3, 6, 4, 17, 10, 9]));
```

---

## 배열 문제 풀이 - 일곱 난장이

```javascript
function answer(dwarf) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < dwarf.length; i++) {
    sum += dwarf[i];
  }
  sum -= 100;

  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (sum == dwarf[i] + dwarf[j]) {
        result = [dwarf[i], dwarf[j]];
        break;
      }
    }
  }

  return result;
}

console.log(answer([1, 5, 6, 7, 10, 12, 19, 29, 33]));
```

---

## 배열 문제 풀이 - 나무 그리기

```javascript
function answer(height) {
  let str = "\n";

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height - i - 1; j++) {
      str += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      str += "*";
    }

    str += "\n";
  }

  return str;
}

console.log(answer(3));
```

---

## 배열 문제 풀이 - Two Sum

```javascript
function answer(nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target == nums[i] + nums[j]) {
        result = [i, j];
      }
    }
  }

  return result;
}

console.log(answer([2, 7, 11, 15], 9));
```

```javascript
// user code
function answer(nums, target) {
  let map = {}; // key, value

  for (let i = 0; i < nums.length; i++) {
    if (map[target - num[i]] != undefined) {
      return [map[target - nums[i]], i];
    }

    map[nums[i]] = i;
  }
}

console.log(answer([2, 7, 11, 15], 9));
```

---

## 배열 문제 풀이 - OX 퀴즈

```javascript
function answer(mark) {
  let result = 0;
  let score = 0;

  for (let i = 0; i < mark.length; i++) {
    if (mark[i] == 1) {
      score += 1;
      result += score;
    } else {
      score = 0;
    }
  }

  return result;
}

console.log(answer([1, 0, 1, 1, 1, 0, 1, 1, 0, 0]));
```

---

## 배열 문제 풀이 - 벽돌 옮기기

```javascript
function answer(blocks) {
  let result = 0;
  let sum = 0;
  for (let i = 0; i < blocks.length; i++) {
    sum += blocks[i];
  }

  let avg = sum / blocks.length;

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] > avg) {
      result += blocks[i] - avg;
    }
  }
  return result;
}

console.log(answer([12, 8, 10, 11, 9, 5, 8]));
```

---

## 배열 문제 풀이 - 숫자 빈도수

```javascript
function answer(s, e) {
  let result = [];

  // 0인 값으로 배열 생성
  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  let num;

  for (let i = s; i <= e; i++) {
    num = i;
    while (num != 0) {
      result[num % 10]++;
      num /= 10;
      num = parseInt(num);
    }
  }

  return result;
}
```

- 나머지를 이용해서 숫자의 빈도수를 확인한다.

---

## 배열 문제 풀이 - 달팽이 만들기

```javascript
function answer(length) {
  let result = [];

  for (let i = 0; i < length; i++) {
    result.push([]);
  }

  // 1. length 길이 만큼 시작해서 숫자를 채워준다.
  // 2. length - i, 방향 전환, 2회
  // length == 0 -> 프로그램이 멈춘다.

  let direction = 1;
  let x, y, num;
  x = y = num = 1;

  x--;
  while (1) {
    for (let i = 0; i < length; i++) {
      x += direction;
      result[y][x] = ++num;
    }

    length--;

    if (length == 0) break;

    for (let j = 0; j < length; j++) {
      y += direction;
      result[y][x] = ++num;
    }

    direction *= -1;
  }
  return result;
}

console.log(answer(3));
```

---

## 프로토 타입

- 어떠한 객체가 만들어지기 위해 객체의 모태가 되는 원형
- 자바스크립트는 프로토타입을 이용한 복사(Cloning)을 통해 새로운 객체 생성
- 일반적인 객체 생성 방식 : 속성은 생성자, 메서드는 프로토타입에서 정의

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.isAdult = function () {
  return this.age > 18;
};

const p1 = new Person("bob", 26);
const p2 = new Person("alice", 16);

console.log(p1.isAdult()); // true
console.log(p2.isAdult()); // false
```

---

## 연결 리스트 (Linked List)

- 각 노드가 데이터와 포인터를 가지며, 한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조
- 노드가 가진 포인터를 통해서 다른 node에 접근할 수 있다.

### 구현 메서드

- 노드 개수 / 비어 있는지 확인 / 출력 : size(), isEmpty(), printNode()
- 노드 추가 : append(), insert()
- 노드 삭제 : remove(), removeAt()
- 데이터 위치 확인 : indexOf()

---

## 연결 리스트 구현하기 (1)

```javascript
// Node() : data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList() : head와 length를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

// size() : 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty() : 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let ll = new LinkedList();
console.log(ll);
ll.head = new Node(123);
ll.length++;
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log(ll);
```

---

## 연결 리스트 구현하기 (2)

### printNode(), append() 구현

```javascript
// printNode() : 노드 출력
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} => `);
  }
  console.log("null");
};

// append() : 연결 리스트 가장 끝에 노드 추가
// LinkedList의 head가 null이면  this.head에 노드를 바로 추가한다.
// LinkedList의 head의 next를 계속 지칭해서 마지막 노드까지 접근하고 마지막 노드의 next에 value를 추가한다.
LinkedList.prototype.append = function (value) {
  let node = new Node(value);
  let current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }

  this.length++;
};

let ll = new LinkedList();
ll.append(11);
ll.append(223);

ll.printNode();
```

---

## 연결 리스트 구현하기 (3)

```javascript
// insert()
LinkedList.prototype.insert = function (value, position = 0) {
  // position 범위 설정
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

  // 추가할 Node 위치 찾기
  if (position === 0) {
    node.next = current;
    this.head = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    // Node 연결
    node.next = current;
    prev.next = node;
  }

  this.length++;
  return true;
};
```

---

## 연결 리스트 구현하기 (4)

```javascript
// remove()
LinkedList.prototype.remove = function (value) {
  let current = this.head,
    prev = current;

  // current와 prev가 순차적으로 이동하면서 해당 value에 맞는 node를 탐색
  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  if (current === this.head) {
    // 처음 node가 삭제할 노드일 때
    this.head = current.next;
  } else {
    // current가 있는 node의 연결을 해제한다.
    // 가비지 콜렉터가 해당 node를 삭제한다.
    prev.next = current.next;
  }

  this.length--;

  return current.data;
};
```

---

## 연결리스트 구현하기 (5)

```javascript
// removeAt() : position 위치 노드 삭제
LinkedList.prototype.removeAt = function (position = 0) {
  // position에 예외값이 들어가는 것을 방지
  if (position < 0 || position >= this.length) {
    return null;
  }

  // 특정 위치 node를 찾기 위한 변수 선언
  let current = this.head,
    index = 0,
    prev;

  // position이 없을 때 or 0일 때는 해당 시작점을 다음 node의 data로 이동한다.
  if (position == 0) {
    this.head = current.next;
  } else {
    // while문을 통해 해당 position으로 순차 이동한다.
    while (index++ < posiiton) {
      prev = current;
      current = current.next;
    }

    // 해당 node 이전 node(prev)를 해당 node(current)의 다음 node(current.next)와 연결한다.
    prev.next = current.next;
  }

  this.length--;

  return current.data;
};
```

- 매개변수 position 만으로 해당 위치의 노드를 삭제하는 메소드

---

## 연결리스트 구현하기 (6)

```javascript
// indexOf() : value 값을 갖는 노드 위치 반환
LinkedList.prototype.indexOf = function (value) {
  let current = this.head,
    index = 0;

  while (current != null) {
    if (current.data === value) {
      return index;
    }

    index++;
    current = current.next;
  }

  return -1;
};

// remove2() : indexOf() + removeAt = remove
LinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};
```
