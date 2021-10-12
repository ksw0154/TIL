// Queue() : 생성자 함수로 초기 데이터 설정
function Queue(array) {
  this.array = array ? array : [];
}

// getBuffer() : 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty() : 객체 내 데이터 존재 여부 파악
Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

// enqueue() : 데이터 추가
Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

// dequeue() : 데이터 삭제
Queue.prototype.dequeue = function () {
  return this.array.shift();
};

// front() : 가장 첫 데이터 반환
Queue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0];
};

// size() : 큐 내 데이터 개수 확인
Queue.prototype.size = function () {
  return this.array.length;
};

// clear() : 큐 초기화
Queue.prototype.clear = function () {
  this.array = [];
};

let queue = new Queue([1, 2, 3]);

let data = queue.getBuffer();

console.log(Object.getOwnPropertyDescriptors(Queue.prototype));

// Queue 최적화
function Queue(array) {
  this.array = array ? array : [];
  this.tail = array ? array.length : 0;
  this.head = 0;
}

// enqueue() : 데이터 추가
Queue.prototype.enqueue = function (element) {
  // 현재 tail값을 기준으로 element를 추가하고 tail값을 1증가시킨다.
  // -> 다음 element를 받을 준비를 하기 위해서
  return (this.array[this.tail++] = element);
};

// dequeue() : 데이터 삭제
Queue.prototype.dequeue = function () {
  if (this.head === this.head) return undefined;

  let element = this.array[this.head];
  delete this.array[this.head++];
  return element;
};
