# JavaScript [비선형 자료구조1]

## 우선순위 큐

- 우선 순위를 고려하여 먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out) 기반의 선형 자료구조
- 우선순위 정렬방식 : 배열 기반, 연결리스트 기반, 힙(Heap) 기반 등의 정렬 방식 존재

---

## 우선순위 큐 구현하기 (1)

```javascript
// element : 데이터와 우선순위를 저장하기 위한 생성자 함수
function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}

// PriorityQueue() : Element 관리를 위한 생성자 함수
function PriorityQueue() {
  this.array = [];
}

// getBuffer() : 객체 내 데이터 셋 반환
PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((element) => element.data);
};

// isEmpty() : 객체 내 데이터 존재 여부 파악
PriorityQueue.prototype.isEmpty = function () {
  return this.array.length == 0;
};
```

---

## 우선순위 큐 구현하기 (2)

```javascript
// enqueue() : 데이터 추가
PriorityQueue.prototype.enqueue = function (data, priority) {
  let element = new Element(data, priority);
  let added = false;

  for (let i = 0; i < this.array.length; i++) {
    // 새로운 element가 array의 중간에 들어갈 때
    if (element.priority < this.array[i].priority) {
      this.array.splice(i, 0, element);
      added = true;
      break;
    }
  }

  // element가 중간에 들어가지 않았을 때, 제일 마지막에 추가
  if (!added) {
    this.array.push(element);
  }

  return this.array.length;
};

// dequeue() : 데이터 삭제
PriorityQueue.prototype.dequeue = function () {
  return this.array.shift();
};
```

---

## 우선순위 큐 구현하기 (3)

```javascript
// front() : 가장 첫 데이터 반환
PriorityQueue.prototype.front = function () {
  // 에러처리를 꼭 신경써주자
  return this.array.length == 0 ? undefined : this.array[0].data;
};

// size() : 큐 내 데이터 개수 확인
PriorityQueue.prototype.size = function () {
  return this.array.length;
};

// clear()
PriorityQueue.prototype.clear = function () {
  this.array = [];
};
```

---

## 원형 큐

- 원형 형태를 가지며 먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out) 기반의 선형 자료 구조
- head, tail, length, size 속성을 이용한다.
- 큐가 비어있거나 가득 차있으면 head와 tail이 동일한 위치에 있다.

### 구현 메서드

- 데이터가 꽉 찼는지에 대한 메서드가 추가되었다.
  - isFull()

---

## 원형 큐 구현하기 (1)

```javascript
// CircularQueue() : 초기 속성 값 설정을 위한 생성자 함수
// size 값은 임의로 입력해준다.
function CircularQueue(array = [], size = 5) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

// getBuffer() : 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty() : 데이터 비어 있는지 확인
CircularQueue.prototype.isEmpty = function () {
  return this.length == 0;
};

// isFull() : 데이터 꽉 차 있는지 확인
CircularQueue.prototype.isFull = function () {
  return this.length == this.size;
};

let cq = new CircularQueue([1, 2, 3]);

console.log(cq);
```

---

## 원형 큐 구현하기 (2)

```javascript
// enqueue() : 데이터 추가
CircularQueue.prototype.enqueue = function (element) {
  if (this.isFull()) return false;

  this.array[this.tail % this.size] = element;
  this.tail++;
  // this.tail = (this.tail + 1) % this.size
  this.length++;

  return true;
};

// dequeue() : 데이터 삭제
CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;

  // element는 삭제되는 변수를 임시로 저장하기 위해서 사용
  let element = this.array[this.head % this.size];
  delete this.array[this.head % this.size];
  this.head++;
  this.length--;

  return element;
};

let cq = new CircularQueue([1, 2, 3]);

console.log(cq);
```

---

## 원형 큐 구현하기 (3)

```javascript
// front() : 가장 첫 데이터 반환
CircularQueue.prototype.front = function () {
  return this.length == 0 ? undefined : this.array[this.head];
};

// size() : 큐 내 데이터 개수 확인
CircularQueue.prototype.dataSize = function () {
  return this.length;
};

// clear() : 큐 초기화
CircularQueue.prototype.clear = function (size = DEFAULT_SIZE) {
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
};
```

---

## 데크

- Double-Ended Queue의 약자
- 삽입과 삭제가 양쪽 끝에서 모두 발생할 수 있는 선형 자료 구조

### 구현 메서드

- 데이터 전체 획득 / 비어있는지 확인 : getBuffer(), isEmpty()
- 데이터 추가 / 삭제 : pushFront(), popFront(), pushBack(), popBack(),
- 첫 번째 & 끝 데이터 반환 / 사이즈 / 전체 삭제 : front(), back(), size(), clear()

---

## 데크 구현하기 (1)

```javascript
// Deque() : 초기 속성값 설정을 위한 생성자 함수
function Deque(array = []) {
  this.array = array;
}

// getBuffer() : 객체 내 데이터 셋 반환
Deque.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty() : 데이터가 비어 있는지 확인
Deque.prototype.isEmpty = function () {
  return this.array.length == 0;
};

let dq = new Deque([1, 2, 3]);
console.log(dq);

let data = dq.getBuffer();
console.log(data === dq.array);
console.log(data);

console.log(dq.isEmpty());
console.log(Object.getOwnPropertyDescriptors(Deque.prototype));
```

---

## 데크 구현하기 (2)

```javascript
// pushFront() : 앞쪽 데이터 추가
Deque.prototype.pushFront = function (element) {
  return this.array.unshift(element);
};

// popFront() : 앞쪽 데이터 삭제
Deque.prototype.popFront = function () {
  return this.array.shift();
};

// pushBack() : 뒤쪽 데이터 추가
Deque.prototype.pushBack = function (element) {
  return this.array.push(element);
};

// popBack() : 뒤쪽 데이터 삭제
Deque.prototype.popBack = function () {
  return this.array.pop();
};

let dq = new Deque([1, 2, 3]);

dq.pushFront(0);
dq.pushBack(4);
console.log(dq);

console.log(dq.popFront());
console.log(dq.popBack());
console.log(dq);
```

---

## 데크 구현하기 (3)

```javascript
// front() : 가장 첫 데이터 반환
Deque.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0];
};

// back() : 가장 끝 데이터 반환
Deque.prototype.back = function () {
  return this.array.length == 0 ? undefined : this.array[this.array.length - 1];
};

// size() : 큐 내 데이터 개수 확인
Deque.prototype.size = function () {
  return this.array.length;
};

// clear() : 큐 초기화
Deque.prototype.clear = function () {
  this.array = [];
};

let dq = new Deque([1, 2, 3]);
console.log(dq);
console.log(dq.front());
console.log(dq.back());
console.log(dq.size());
dq.clear();
console.log(dq);
```

---
