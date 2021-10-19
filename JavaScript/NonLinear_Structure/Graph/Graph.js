function Graph() {
  this.edge = {};
  // key, value 형태로 데이터를 표현한다.
  // key : 정점
  // value : array (정점과 연결되어 있는 다른 정점들의 배열)
}

// addVertex() : 정점(vertex) 추가
Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
};

// addEdge() : 간선(edge) 추가
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
};

// removeEdge() : 간선(edge) 삭제
// 1. v1이 해당 Edge에 있는지
// 2. v2가 v1의 list에 포함되어 있는지
// 3. v2 값을 삭제
// 4. list가 empty가 됐을 때 v1도 삭제할 수 있도록
Graph.prototype.removeEdge = function (v1, v2) {
  if (this.edge[v1]) {
    let idx = this.edge[v1].indexOf(v2);

    if (idx != -1) {
      this.edge[v1].splice(idx, 1);
    }

    // 정점에 연결된 정점들이 없을 때
    if (this.edge[v1].length === 0) {
      delete this.edge[v1];
    }
  }
};

// removeVertex() : 정점(vertex) 삭제
Graph.prototype.removeVertex = function (v) {
  if (this.edge[v] === undefined) return;

  let length = this.edge[v].length;
  let connectedVertex = [...this.edge[v]];

  for (let i = 0; i < length; i++) {
    this.removeEdge(v, connectedVertex[i]);
  }
};

// sizeVertex() : vertex 개수 반환
Graph.prototype.sizeVertex = function () {
  return Object.keys(this.edge).length;
};

// sizeEdge() : edge 개수 반환
Graph.prototype.sizeEdge = function (vertex) {
  return this.edge[vertex] ? Object.keys(this.edge[vertex]).length : 0;
};

// print() : 현재 Graph 연결 상태 출력
Graph.prototype.print = function () {
  for (let vertex in this.edge) {
    let neighbors = this.edge[vertex];
    if (neighbors.length == 0) continue;

    process.stdout.write(`${vertex} -> `);
    for (let j = 0; j < neighbors.length; j++) {
      process.stdout.write(`${neighbors[j]} `);
    }
    console.log("");
  }
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E"];
for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

// graph.print();
console.log(graph.edge);

// 무방향 그래프일 떄

// addEdge() : 간선(edge) 추가
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
  this.edge[v2].push(v1);
};

// removeEdge() : 간선(edge) 삭제
// 1. v1이 해당 Edge에 있는지
// 2. v2가 v1의 list에 포함되어 있는지
// 3. v2 값을 삭제
// 4. list가 empty가 됐을 때 v1도 삭제할 수 있도록
Graph.prototype.removeEdge = function (v1, v2) {
  // v1 -> v2 삭제
  if (this.edge[v1]) {
    let idx = this.edge[v1].indexOf(v2);

    if (idx != -1) {
      this.edge[v1].splice(idx, 1);
    }

    // 정점에 연결된 정점들이 없을 때
    if (this.edge[v1].length === 0) {
      delete this.edge[v1];
    }
  }

  // v2 -> v1 삭제
  if (this.edge[v2]) {
    let idx = this.edge[v2].indexOf(v1);

    if (idx != -1) {
      this.edge[v2].splice(idx, 1);
    }

    // 정점에 연결된 정점들이 없을 때
    if (this.edge[v2].length === 0) {
      delete this.edge[v2];
    }
  }
};
