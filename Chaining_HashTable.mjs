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

let cht = new ChainingHashTable();

cht.put("Ana", 172);
cht.put("Donnie", 183);
cht.put("Sue", 163);
cht.put("Jamie", 168);
cht.put("Paul", 190);

console.log(cht.remove("Ana"));
console.log("");
cht.print();

console.log(cht.remove("Donnie"));
console.log("");
cht.print();
