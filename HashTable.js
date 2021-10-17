const { Hash } = require("crypto");

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
console.log(ht);
console.log(ht.getBuffer());
