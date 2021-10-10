# JavaScript [선형 자료구조2]

## 이중 연결 리스트 (Double Linked List)

- 각 노드가 데이터와 포인터를 가지며, 두줄 로 연결되는 방식으로 데이터를 저장하는 자료구조
- 포인터가 앞에도 존재한다 (2개의 포인터)
  - prev - data - next 형식으로 존재

### 구현 메서드(method)

- 노드 개수 / 비어 있는지 확인 : size(), isEmpty()
- 순차 출력 / 역 출력 : printNode(), printNodeInverse()
- 노드 추가 : append(), insert()
- 노드 삭제 : remove(), removeAt()
- 데이터 위치 확인 : indexOf()

---

## 이중 연결 리스트 구현하기 (1, 2)

```javascript
// Node() : data와 point인 next, prev를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

// DoubleLinkedList() : head, tail과 length를 가지고 있는 객체
function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// size() : 연결 리스트 내 노드 개수 확인
DoubleLinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty() : 객체 내 노드 존재 여부 파악
DoubleLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

// printNode() : 노드 정방향 출력
DoubleLinkedList.prototype.prtintNode = function () {
  process.stdout.write("head -> ");
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
};

// printNodeInverse() : 노드 역방향 출력
DoubleLinkedList.prototype.printNodeInverse = function () {
  let temp = [];

  process.stdout.write("null <- ");
  for (let node = this.tail; node != null; node = node.prev) {
    temp.push(node.data);
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    process.stdout.write(`${temp[i]} <- `);
  }
  console.log("tail");
};

// append() : 연결 리스트 가장 끝에 노드 추가
DoubleLinkedList.prototype.append = function (value) {
  let node = new Node(value);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.taill.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  this.length++;
};
```

---

## 이중 연결 리스트 구현하기 (3, 4)

```javascript
// insert() : position 위치에 노드 추가
DoubleLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

  if (position === 0) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = current;
      current.prev = node;
      this.head = node;
    }
  } else if (position === this.length) {
    current = this.tail;
    current.next = node;
    node.prev = current;
    this.tail = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;

    current.prev = node;
    node.prev = prev;
  }

  this.length++;

  return true;
};

// remove()
DoubleLinkedList.prototype.remove = function (value) {
  let current = this.head,
    prev = current.next;

  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  if (current === this.head) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (current === this.tail) {
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    prev.next = current.next;
    current.next.prev = prev;
  }

  this.length--;

  return current.data;
};
```

---

## 이중 연결 리스트 구현하기 (5)

```javascript
// removeAt() : position 위치 노드 삭제
DoubleLInkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head,
    index = 0,
    prev;

  if (position === 0) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (position === this.length - 1) {
    current = this.tail;
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
    current.next.prev = prev;
  }

  this.length--;

  return current.data;
};
```

---

## 원형 연결 리스트

- Circular Linked List
- 노드가 데이터와 포인터를 가지며, 원형 형태로 연결되어 있는 방식
- 기존의 연결 리스트는 마지막 노드가 null을 가리키고 있었지만 head가 가리키는 노드를 가리킨다.
- tail이 없다.

---

## 원형 연결 리스트 구현하기 (1 ,2)

```javascript
// Node() : data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// CircularLinkedList() : head와 length를 가지고 있는 객체
function CircularLinkedList() {
  this.head = null;
  this.length = 0;
}

// size() : 연결 리스트 내 노드 개수 확인
CircularLinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty() : 객체 내 노드 존재 여부 파악
CircularLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let cll = new CircularLinkedList();
let node;

console.log(cll);

node = new Node(123);
console.log(node);
cll.head = node;
node.next = cll.head;
cll.length++;

console.log(cll);

node = new Node(456);
node.next = cll.head.next;
cll.head.next = node;
cll.length++;
console.log(cll);

// printNode() : 노드 출력
CircularLinkedList.prototype.printNode = function () {
  process.stdout.write("head -> ");

  if (this.length != 0) {
    process.stdout.write(`${this.head.data} -> `);
    for (let node = this.head.next; node != this.head; node = node.next) {
      process.stdout.write(`${node.data} -> `);
    }
  }

  console.log("null");
};

// append(): 연결 리스트 가장 끝에 노드 추가
CircularLinkedList.prototype.append = function (value) {
  let node = new Node(value),
    current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != this.head) {
      current = current.next;
    }
    current.next = node;
  }
  node.next = this.head;

  this.length++;
};
```

---

## 원형 연결 리스트 구현하기 (3, 4)

```javascript
// insert() : position 위치에 노드 추가
CircularLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return null;
  }

  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

  if (position === 0) {
    nodex.next = current;
    if (this.isEmpty()) {
      current = node;
    } else {
      while (current.next != this.head) {
        current = current.next;
      }
    }

    this.head = node;
    current.next = this.head;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;

    if (node.next === null) {
      node.next = this.head;
    }
  }

  this.length++;

  return true;
};
```

```javascript
// remove() :  value 데이터를 찾아 노드 삭제
CircularLinkedList.prototype.remove = function (value) {
  let current = this.head,
    prev = current,
    data;

  while (current.data != value && current.next != this.head) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  data = current.data;
  if (current === this.head) {
    while (current.next != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.next = this.head;
  } else {
    prev.next = current.next;
  }

  this.length--;

  return data;
};
```

---

## 원형 연결 리스트 구현하기 (5, 6)

```javascript
// removeAt() : position 위치 노드 삭제
CircularLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head,
    index = 0,
    prev,
    data;

  if (position === 0) {
    data = current.data;

    while (current.next != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.next = this.head;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    data = current.data;
    prev.next = current.next;
  }

  this.length--;

  return data;
};
```

```javascript
// indexOf() : value 값을 갖는 노드 위치 반환
CircularLinkedList.prototype.indexOf = function (value) {
  let current = this.head,
    index = 0;

  do {
    if (current.data === value) {
      return index;
    }

    index++;
    current = current.next;
  } while (current != this.head);

  return -1;
};
```

---

## 연결리스트 문제풀이 : 열차 연결

---

## 연결리스트 문제풀이 : 서류 정리

---

## 연결리스트 문제 풀이 : 대표 선출
