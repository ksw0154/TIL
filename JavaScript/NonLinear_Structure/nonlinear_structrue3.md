# JavaScript [비선형 자료구조3]

### 해시함수

- 임의의 길이 데이터를 고정된 길이의 데이터로 매핑하는 함수
- 해시 함수 특성
  - 압축성 : 다양한 가변 길이의 입력에 대해 고정된 크기의 결과값을 반환하는 성질
  - 효율성 : 어떤 입력 값에 대해서도 많은 자원과 시간이 소요되지 않고 처리되는 성질
  - 저항성 : 결과값을 바탕으로 입력값을 찾는 것이 불가능한 성질 (가장 중요하다)

### 해시 알고리즘

- md5
- SHA-2, SHA-3
- 해시 된 값을 비교하는 알고리즘

## 해시테이블

- Hash 함수를 사용하여 평균 O(1) 시간 복잡도로 특정 값을 신속하게 찾는 자료구조
- 충돌(Collision) 해결 방법
  - 충돌 : 다른 변수(a, b)지만 동일한 해시 값(index)을 가지고 있는 변수
    - a 변수의 유무를 확인하려 했지만 b의 해시 값(index)을 통해 true가 나올 수 있다 (오류)
  - 해시 함수 변경 : 더 큰 숫자의 공간과 Modular 산술 값을 이용해 충돌 최소화
  - 자료 구조 확장 : Open Addressing Method (선형 조사법, 이중 해시), Close Addressing Method(체이닝)
    - Open : 남는 공간을 활용해서 저장을 하는 방식 (남는 자리)
    - Close : 다른 자료구조와 병합을 해서 저장하는 방식 (새로운 자리)
      - 중첩되는 곳에 linked List를 두고 next next를 주면서 중첩된 변수를 연결한다.

### 구현 메서드

- 초기화 / 크기 반환 : clear(), size()
- 전체 데이터 반환 / 출력 : getBuffer(), print()
- 데이터 추가 /삭제 / 반환 : put(), remove(), get()

---

## 해시테이블 구현하기 (1)

```javascript
const HASH_SIZE = 37;

// Element() : key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// HashTable() : 생성자
function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// HashCode() : 해시 함수
// input(key) -> hashCode -> output(index)
HashTable.prototype.HashCode = function (key) {
  // loselosehash 알고리즘
  // 가장 기본적인 알고리즘
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % HASH_SIZE;
};

let ht = new HashTable();
console.log(ht);

console.log(ht.HashCode("Ana"));
console.log(ht.HashCode("Paul"));
```

---

## 해시테이블 구현하기 (2)

```javascript
// put() : 데이터 추가
// key, value 형태가 hashTable에 들어 감 -> hashCode() -> hash 값을 index로 저장
// index에 값이 있으면 false로 끝내고 값이 없으면 Element 추가
HashTable.prototype.put = function (key, value) {
  let index = this.HashCode(key);
  console.log(`key : ${key} -> index : ${index}`);

  if (this.table[index] !== undefined) {
    return false;
  }

  this.table[index] = new Element(key, value);
  this.length++;
};

// get() : 데이터 조회
HashTable.prototype.get = function (key) {
  return this.table[this.HashCode(key)];
};

// remove() : 데이터 삭제
HashTable.prototype.remove = function (key) {
  let element = this.table[this.HashCode(key)];

  if (element !== undefined) {
    delete this.table[this.HashCode(key)];
    this.length--;
  }

  return element;
};

let ht = new HashTable();

ht.put("Ana", 192);
ht.put("Paul", 305);
ht.remove("Paul");
```

---

## 해시테이블 구현하기 (3)

```javascript
// clear() : 초기화
HashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size() : 크기 변환
HashTable.prototype.size = function () {
  return this.length;
};

// getBuffer() : 데이터 셋 반환
// list 형태로 element가 empty가 아닌 것만 가지게 된다.
HashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }

  return array;
};

// print() : 데이터 셋 출력
HashTable.prototype.print = function () {
  for (let i = 0; i < this.length; i++) {
    if (this.table[i]) {
      console.log(i + " -> " + this.table[i].key + " : " + this.table[i].value);
    }
  }
};

let ht = new HashTable();

ht.put("Ana", 192);
ht.put("Paul", 305);

ht.print();
console.log(ht.size());
console.log(ht.getBuffer());
```

---

## 해시테이블 충돌 및 해결

```javascript
// use djb2
const HASH_SIZE = 1013;

HashTable.prototype.hashCode = function (key) {
  // use djb2 function
  let hash = 5381; //seed
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

let ht = new HashTable();

// use loselose
// 충돌이 일어나면 false를 반환
```

---

## 선형 조사법 해시테이블

- Linear Probing Hash Table
- Hash 충돌이 발생했을 때, 그 다음 주소를 확인하고 비어 있다면 그 자리에 대신 저장하는 해시테이블 기반 자료구조
- 이미 index에 값이 있으면 그 다음 index에 값을 저장한다.

---

## 선형 조사법 해시테이블 구현하기 (1)

```javascript
const HASH_SIZE = 5; // 충돌을 위해 변경

// Element() : Key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// LinearHashTable() : 생성자
function LinearHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

LinearHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// clear() : 초기화
LinearHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size() : 크기 반환
LinearHashTable.prototype.size = function () {
  return this.length;
};

// getBuffer() : 데이터 셋 변환
LinearHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
};

// print() : 데이터 셋 출력
LinearHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + " -> " + this.table[i].key + ": " + this.table[i].value);
    }
  }
};

let lht = new LinearHashTable();
console.log(lht);
```

---

## 선형 조사법 해시테이블 구현하기 (2)

```javascript
// put() : 데이터 추가
LinearHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  let startIndex = index;
  console.log(`key : ${key} -> index : ${index}`);

  do {
    // 해당 index에 값이 없을 떄
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, value);
      this.length++;
      return true;
    }
    // 해당 index에 값이 있을 떄
    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);
  return false;
};
```

---

## 선형 조사법 해시테이블 구현하기 (3)

```javascript
// get() : 데이터 조회
LinearHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    // 밀려서 저장된 element들이 있기 때문에 index만 확인하면 안된다.
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return undefined;
};
```

---

## 선형 조사법 해시테이블 구현하기 (4)

```javascript
// remove() : 데이터 삭제
LinearHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    // 밀려서 저장된 element들이 있기 때문에 index만 확인하면 안된다.
    // index에 값이 있을 때 key 값을 확인해서 동일한 element인지 확인한다.
    // delete를 이용해서 해당 element를 삭제한다.
    if (this.table[index] !== undefined && this.table[index].key === key) {
      let element = this.table[index];
      delete this.table[index];
      this.length--;

      return element;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);
};
```
