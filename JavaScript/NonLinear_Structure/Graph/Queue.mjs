// Queue() : 생성자 함수로 초기 데이터 설정
function Queue(array) {
  this.array = array ? array : [];
}

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

export { Queue };
