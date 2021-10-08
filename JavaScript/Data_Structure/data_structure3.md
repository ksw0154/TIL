# JavaScript [선형 자료구조3]

## 스택

- 나중에 넣은 데이터가 먼저 나오는 LIFO(Last In First Out) 기반의 선형 자료 구조

### 구현 메소드

- 데이터 전체 획득 / 비어있는지 확인 : getBuffer(), isEmpty()
- 추가 / 삭제 / 마지막 데이터 조회 / 크기 확인 : push(), pop(), peak(), size()
- 데이터 위치 / 존재 여부 확인 : indexOf(), includes()

- 사용 예시 : Ctrl + z, 뒤로 가기(페이지 이동)

---

## 스택 구현하기

```javascript
// stack() : 생성자 함수로 초기 데이터 설정
// default 값을 지정해줘도 된다.
function Stack(array) {
  this.array = array ? array : [];
}

// getBuffer(): 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function () {
  // array를 복사를 해서 반환
  return this.array.slice();
};

// isEmpty() : 객체 내 데이터 존재 여부 파악
Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
};

// push() : 데이터 추가
Stack.prototype.push = function (element) {
  return this.array.push(element);
};

// pop() : 데이터 삭제
Stack.prototype.pop = function () {
  return this.array.pop();
};

// peak() : 가장 끝 데이터 반환
Stack.prototype.peak = function () {
  return this.array[this.array.length - 1];
};

// size() : 스택 내 데이터 개수 확인
Stack.prototype.size = function () {
  return this.array.length;
};

// indexOf(): 데이터 위치 값 조회
Stack.prototype.indexOf = function (element, position = 0) {
  for (let i = position; i < element; i++) {
    if (element == this.array[i]) return i;
  }

  return -1;
};

// includes() : 데이터 존재 여부 확인
Stack.prototype.includes = function (element, position = 0) {
  for (let i = position; i < element; i++) {
    if (element == this.array[i]) return true;
  }

  return false;
};
```

---

## 스택 문제풀이 - 기차 운행

---

## 스택 문제풀이 - 괄호 짝 찾기

---

## 스택 문제풀이 - 접시 꺼내기

---

## 스택 문제풀이 - 기린의 시야

---

## 스택 문제풀이 - 괄호 계산

---

## 큐

---

## 큐 구현하기

---

## 큐 최적화
