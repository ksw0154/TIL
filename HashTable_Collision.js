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
