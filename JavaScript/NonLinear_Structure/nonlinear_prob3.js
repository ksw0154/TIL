// 3번 Graph (BFS)
// 미로 찾기
function Node(x, y, c) {
  this.x = x;
  this.y = y;
  this.c = c; //count
}

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (element) {
  this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

function answer(input) {
  let result = -1;
  let size = input.length;
  let dir = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
  ];

  // 미로 맵 만들기 (2차원 배열)
  let map = [];
  for (let i = 0; i < size; i++) {
    map[i] = [];
    for (let j = 0; j < size; j++) {
      map[i][j] = Number(input[i][j]);
    }
  }

  // 시작 포인트, 끝 포인트 설정
  let s = [0, size - 1]; //시작 포인트 (왼쪽 하단)
  let e = [size - 1, 0]; // 끝 포인트 (오른쪽 상단)
  let q = new Queue();

  q.enqueue(new Node(s[0], s[1], 1));
  while (!q.isEmpty()) {
    let v = q.dequeue();

    // 허용된 좌표값을 벗어나는지 확인 (맵 안에 있는 좌표값인지)
    if (v.x < 0 || v.y < 0 || v.x >= size || v.y >= size) continue;
    if (map[v.y][v.x]) continue;

    // end point
    if (v.x == e[0] && v.y == e[1]) {
      result = v.c;
      break;
    }

    // 최초 방문 (벽으로 처리해준다)
    map[v.y][v.x] = 1;

    // 4방향으로 움직인다.
    for (let i = 0; i < dir.length; i++) {
      q.enqueue(new Node(v.x + dir[i][0], v.y + dir[i][1], v.c + 1));
    }
  }
  return result;

  // 문자열 -> map(정수: 0, 1)
  // 시작, 끝 포인트 설정
  // 시작 -> Queue
  // Queue 순회하면서 끝이면 break;
}

let input = [
  ["00110", "00010", "00110", "00000", "01011"],
  ["00110", "00010", "00110", "00010", "01011"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
