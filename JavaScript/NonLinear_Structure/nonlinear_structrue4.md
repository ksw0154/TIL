# JavaScript [비선형 자료구조4]

## 체이닝 해시테이블

- Chaining Hash Table
- 별도의 자료구조인 연결 리스트를 병합으로 사용하여 Hash 충돌을 해결한 해시 테이블 기반 자료구조
- 테이블이 충돌이 일어날 때 Element들을 연결리스트로 이어서 해당 index에 element를 넣어주는 것
- 해당 index만 탐색하면 되기 때문에 속도가 훨씬 빠르다.

---

## 체이닝 해시테이블 구현하기 (1)

```javascript
// LinkedList 가져와서 사용하기
import { LinkedList } from "./LinkedList.mjs";

const HASH_SIZE = 37;

// Element() : key, value를 저장하기 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// ChainingHashTable() : 생성자
function ChainingHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hashCode() : 해시 함수
ChainingHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % HASH_SIZE;
};

// clear() : 초기화
ChainingHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size() : 크기 반환
ChainingHashTable.prototype.size = function () {
  return this.length;
};

let cht = new ChainingHashTable();

let ll = new LinkedList();
ll.append(new Element("Ana", 172));
```

---

## 체이닝 해시테이블 구현하기 (2)

```javascript
// put() : 데이터 추가
ChainingHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  // console.log(`key: ${key} -> index : ${index}`);

  if (this.table[index] === undefined) {
    this.table[index] = new LinkedList();
  }

  this.table[index].append(new Element(key, value));
  this.length++;

  return true;
};
let cht = new ChainingHashTable();

cht.put("Ana", 172);
cht.put("Donnie", 183);
cht.put("Sue", 163);
cht.put("Jamie", 168);
cht.put("Paul", 190);
```

---

## 체이닝 해시테이블 구현하기 (3)

```javascript
// getBuffer() : 데이터 셋 반환
// index와 상관없이 전체 element를 배열로 반환한다.\
ChainingHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;
      do {
        array.push(current.data);
        current = current.next;
      } while (current);
    }
  }
  return array;
};

// print() : 데이터 셋 출력
ChainingHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;
      process.stdout.write(`#${i}`);
      do {
        process.stdout.write(` -> ${current.data.key}: ${current.data.value}`);
        current = current.next;
      } while (current);
      console.log("");
    }
  }
};
```

---

## 체이닝 해시테이블 구현하기 (4)

```javascript
// get() : 데이터 조회
// HashTable 전체를 탐색하지 않아도 된다.
// 해당 LinkedList만 탐색하면 된다.
ChainingHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);

  if (this.table[index] !== undefined && !this.table[index].isEmpty()) {
    let current = this.table[index].head;

    do {
      if (current.data.key === key) {
        return current.data.value;
      }
      current = current.next;
    } while (current);
  }

  return undefined;
};
// return : 해당 Element의 value or undefined;
```

---

## 체이닝 해시테이블 구현하기 (5)

```javascript
// remove() : 데이터 삭제
ChainingHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key);
  let element = undefined;

  if (this.table[index] !== undefined) {
    let current = this.table[index].head;

    do {
      if (current.data.key === key) {
        element = current.data;
        this.table[index].remove(current.data);

        // LinkedList가 비어있을 떄 해당 LinkedList를 삭제해준다.
        if (this.table[index].isEmpty()) {
          delete this.table[index];
        }
      }
      current = current.next;
    } while (current);
  }

  this.length--;
  return element;
};

console.log(cht.remove("Ana"));
console.log("");
cht.print();

console.log(cht.remove("Donnie"));
console.log("");
cht.print();
```

---

## 딕셔너리, 해시테이블 문제풀이 - 출석 체크

```javascript
function Dictionary(items = {}) {
  this.items = items;
}

Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

Dictionary.prototype.has = function (key) {
  return this.items.hasOwnProperty(key);
};
function answer(class_1, class_2) {
  let result = [];

  let dict = new Dictionary();
  for (let i = 0; i < class_1.length; i++) {
    dict.set(class_1[i], true);
  }

  for (let i = 0; i < class_1.length; i++) {
    if (dict.has(class_2[i])) {
      result.push(class_2[i]);
    }
  }

  return result;
}

let class_1 = ["Kali", "Oliver", "Naomi"];
let class_2 = ["Oliver", "Naomi", "Maya"];

console.log(answer(class_1, class_2));
```

---

## 딕셔너리, 해시테이블 문제풀이 - 숫자 카드

```javascript
const { Hash } = require("crypto");

const HASH_SIZE = 21;

function HashTable() {
  this.table = new Array(HASH_SIZE);
}

HashTable.prototype.hashCode = function (key) {
  return (key + 10) % HASH_SIZE;
};

HashTable.prototype.put = function (key) {
  let index = this.hashCode(key);
  if (this.table[index] === undefined) {
    this.table[index] = 0;
  }
  this.table[index]++;
  console.log(this.table[index]);
};

HashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  return this.table[index] === undefined ? 0 : this.table[index];
};

function answer(card, select) {
  let result = [];

  let ht = new HashTable();

  for (let i = 0; i < card.length; i++) {
    ht.put(card[i]);
  }
  for (let i = 0; i < select.length; i++) {
    result.push(ht.get(select[i]));
  }

  return result;
}

let card = [-6, -1, 6, 1, 1];
let select = [-2, 1, 3];

console.log(answer(card, select));
```

---

## 딕셔너리, 해시테이블 문제풀이 - 백신 접종

```javascript
function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable(size) {
  this.size = size;
  this.table = new Array(this.size);
  this.length = 0;
}

HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.size;
};

HashTable.prototype.put = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, index + 1);
      this.length++;
      return true;
    }
    index = (index + 1) % this.size;
  } while (index !== startIndex);

  return false;
};

HashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }
    index = (index + 1) % this.size;
  } while (index !== startIndex);

  return undefined;
};

function answer(name) {
  let result = [];

  let ht = new HashTable(name.length);

  for (let i = 0; i < name.length; i++) {
    ht.put(name[i]);
  }

  for (let i = 0; i < name.length; i++) {
    result.push(ht.get(name[i]));
  }

  return result;
}

let name22 = ["Mana", "Naomi", "Lelia", "Morris", "Madonna"];

console.log(answer(name22));
```
