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

---

## 해시테이블 충돌 및 해결

---

## 선형 조사법 해시테이블

---

## 선형 조사법 해시테이블 구현하기 (1)

---

## 선형 조사법 해시테이블 구현하기 (2)

---

## 선형 조사법 해시테이블 구현하기 (3)

---

## 선형 조사법 해시테이블 구현하기 (4)
