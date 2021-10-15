// Dictionary() : 개체(Entity)를 저장할 생성자
function Dictionary(items = {}) {
  this.items = items;
}

Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};

Dictionary.prototype.clear = function () {
  this.items = {};
};

Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

// has() : 개체 존재 여부 확인 (key 정보를 배열로 반환)
Dictionary.prototype.has = function (key) {
  // return value in this.items
  return this.items.hasOwnProperty(key);
};

// set() : 개체(Entity) 추가
Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

// get() : 개체(Entity)의 value 반환
Dictionary.prototype.get = function (key) {
  return this.has(key) ? this.items[key] : undefined;
};

// remove() : 개체(Entity) 삭제
Dictionary.prototype.remove = function (key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }

  return false;
};

// keys() : 모든 key 값을 배열 형태로 반환
Dictionary.prototype.keys = function () {
  return Object.keys(this.items);
};

// values(): 모든 value 값을 배열 형태로 반환
Dictionary.prototype.values = function () {
  // let values = [];
  // for (let k in this.items) {
  //   if (this.has(k)) {
  //     values.push(this.items[k]);
  //   }
  // }
  // return values;

  return Object.values(this.items);
};

// each() : 모든 개체 요소에 대해 callback 함수 수행 (:= foreach)
Dictionary.prototype.each = function (fn) {
  for (let k in this.items) {
    if (this.has(k)) {
      fn(k, this.items[k]);
    }
  }
};

let dict = new Dictionary({ age: 19, name: "alice" });

function printDictionary(key, value) {
  console.log(`key: ${key}`);
  console.log(`value: ${value}`);
}

dict.each(printDictionary);
