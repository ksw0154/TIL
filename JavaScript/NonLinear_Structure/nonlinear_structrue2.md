# JavaScript [비선형 자료구조2]

## 큐, 데크 문제 풀이 - 큐 만들기

```javascript
function answer(cmds) {
  let result = [];

  let tmp = [];
  for (let i = 0; i < cmds.length; i++) {
    let str = cmds[i];

    if (str.includes("enqueue")) {
      let num = str.split(" ")[1];
      tmp.push(num);
    } else if (str == "dequeue") {
      if (tmp.length != 0) {
        let num = tmp.shift();
        result.push(parseInt(num));
      } else {
        result.push(-1);
      }
    } else if (str == "empty") {
      let num = tmp.length == 0 ? 1 : 0;
      result.push(num);
    } else if (str == "size") {
      result.push(tmp.length);
    } else if (str == "front") {
      let num = tmp[0] ? tmp[0] : -1;
      result.push(parseInt(num));
    } else if (str == "back") {
      let num = tmp[tmp.length - 1] ? tmp[tmp.length - 1] : -1;
      result.push(parseInt(num));
    }
  }

  return result;
}
```

```javascript
// user code

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (element) {
  this.array.push(element);
};

Queue.prototype.dequeue = function () {
  let ret = this.array.shift();
  return ret === undefined ? -1 : ret;
};

Queue.prototype.size = function () {
  return this.array.length;
};

Queue.prototype.empty = function () {
  return this.array.length === 0 ? 1 : 0;
};

Queue.prototype.front = function () {
  return this.array.length === 0 ? -1 : this.array[0];
};

Queue.prototype.back = function () {
  return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
};

function answer(cmds) {
  let result = [];
  let queue = new Queue();
  // user code
  for (let i = 0; i < cmds.length; i++) {
    let str = cmds[i].split(" ")[0];

    switch (str) {
      case "enqueue":
        queue.enqueue(Number(cmds[i].split(" ")[1]));
        break;
      case "dequeue":
        result.push(queue.dequeue());
        break;
      case "size":
        result.push(queue.size());
        break;
      case "empty":
        result.push(queue.empty());
        break;
      case "front":
        result.push(queue.front());
        break;
      case "back":
        result.push(queue.back());
        break;

      default:
        break;
    }
  }
  return result;
}
```

---

## 큐, 데크 문제 풀이 - 카드 뽑기

```javascript
function answer(n) {
  let result = [];

  let tmp = [];
  for (let i = 1; i <= n; i++) {
    tmp.push(i);
  }

  while (result.length != n) {
    result.push(tmp.shift());
    tmp.push(tmp.shift());
  }

  return result;
}

console.log(answer(10));
```

---

## 큐, 데크 문제 풀이 - 프린터 출력

```javascript
function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.front = function () {
  return this.array[0];
};

Queue.prototype.max = function () {
  return Math.max(...this.array);
};

function answer(priorities, select) {
  let result = -1;

  // 큐 내의 우선순위가 가장 높은 문서를 확인

  // 그 문서가 나올 때까지, 나머지 문서는 순서를 뒤로 바꾼다.

  // 문서 번호 select를 만족할 때 까지 계속 반복

  let vq = new Queue(); // value
  let pq = new Queue(); // priority

  for (let i = 0; i < priorities.length; i++) {
    vq.enqueue(i);
    pq.enqueue(priorities[i]);
  }

  let count = 0;

  while (true) {
    if (pq.front() === pq.max()) {
      if (vq.front() === select) {
        count++;
        result = count;
        break;
      } else {
        vq.dequeue();
        pq.dequeue();
        count++;
      }
    } else {
      vq.enqueue(vq.dequeue());
      pq.enqueue(pq.dequeue());
    }
  }
  return result;
}
```

---

## 큐, 데크 문제 풀이 - 대표 선출

```javascript
function CircularQueue(size) {
  this.array = new Array(size);
  this.size = this.array.length;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
}

CircularQueue.prototype.enqueue = function (element) {
  this.length++;
  this.array[this.tail++ % this.size] = element;
};

CircularQueue.prototype.dequeue = function () {
  this.length--;
  return this.array[this.head++ % this.size];
};

function answer(n, m, k) {
  let result = [];

  // 원탁에 후보 번호 세팅
  let cq = new CircularQueue(n);

  for (let i = 1; i <= n; i++) {
    cq.enqueue(i);
  }

  // 첫 번째 후보 제거 노드 위치
  cq.tail = cq.head = (n + m - 1) % n;

  let count;
  result.push(cq.dequeue());
  while (cq.length != 0) {
    count = k - 1;
    while (count--) {
      cq.enqueue(cq.dequeue());
    }

    result.push(cq.dequeue());
  }

  return result;
}

console.log(answer(8, 2, 3));
```

---

## 큐, 데크 문제 풀이 - 데크 만들기

---

## 딕셔너리

---

## 딕셔너리 구현하기 (1)

---

## 딕셔너리 구현하기 (2)

---

## 딕셔너리 구현하기 (3)
