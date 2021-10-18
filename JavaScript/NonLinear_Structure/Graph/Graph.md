## 그래프 (1)

### 그래프 (Graph)

- 정점과 간선으로 구성되어 네트워크 구조를 추상화한 비선형 자료구조
- 그래프 특징
  - 정점(Vertex)과 간선(Edge)의 집합
  - 다양한 그래프 종류를 혼합하여 표현 가능
- 사용처 : 길찾기, 게임, 지도, 네비게이션, 네트워크 등

### 그래프 종류

- 방향 그래프 (Directed Graph) : 간선에 특정 방향이 존재하는 그래프 (A -> B로 표현, A에서 B로만 이동 가능)
- 무방향 그래프 (Undirected Graph) : 간선에 특정 방향이 존재하지 않는 그래프 (A - B로 표현, 양방향 이동 가능)
- 가중치 그래프 (Weighted Graph) : 간선에 비용이나 가중치가 할당된 그래프
- 연결 그래프 (Connected Graph) : 무방향 그래프에 있는 모든 정점쌍에 대해 항상 경로가 존재하는 그래프
- 비연결 그래프 (Disconnected Graph) : 무방향 그래프에서 특정 정점쌍 사이에 경로가 존재하지 않는 그래프
- 순환 그래프 (Cycle) : 단순 경로의 시작 정점과 종료 지점이 동일하여 순환 지점이 존재하는 그래프
- 비순환 그래프 (Acyclic Graph) : 순환 지점이 존재하지 않는 그래프
- 완전 그래프 (Complete Graph) : 그래프에 속해 있는 모든 정점이 서로 연결되어 있는 그래프

### 그래프 표현 방법

- 인접 리스트 (Adjacency List) : 정점에 연결된 다른 정점을 리스트로 표현 (연결, 배열, Dict, Hash 등)
- 인접 행렬 (Adjacency Matrix) : 정점에 연결된 다른 정점을 정점 \* 정점 크기의 매트릭스로 표현

### 구현 메서드

- 정점 / 간선 추가 : addVertex(), addEdge()
- 정점 / 간선 삭제 : removeVertex(), removeEdge()
- 정점 / 간선 개수, 그래프 출력 : sizeVertex(), sizeEdge(), print()

---

## 그래프 (2)

### 방향 그래프

- Graph() : edge object 객체 저장을 위한 생성자
- key : vertex
- value : list 형태로 연결된 vertex를 표현하여 edge 연결 관계 표현

```javascript
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

console.log(graph);
```

---

## 그래프 (3-1)

### removeEdge()

1. v1이 해당 Edge에 있는지
2. v2가 v1의 list에 포함되어 있는지
3. v2 값을 삭제
4. list가 empty가 됐을 때 v1도 삭제할 수 있도록

```javascript
// removeEdge() : 간선(edge) 삭제
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
```

### removeVertex()

```javascript
// removeVertex() : 정점(vertex) 삭제
Graph.prototype.removeVertex = function (v) {
  if (this.edge[v] === undefined) return;

  let length = this.edge[v].length;
  let connectedVertex = [...this.edge[v]];

  for (let i = 0; i < length; i++) {
    this.removeEdge(v, connectedVertex[i]);
  }
};
```

---

## 그래프 (3-2)

```javascript
// sizeVertex() : vertex 개수 반환
Graph.prototype.sizeVertex = function () {
  return Object.keys(this.edge).length;
};

console.log(graph.sizeVertex());

// sizeEdge() : edge 개수 반환
Graph.prototype.sizeEdge = function (vertex) {
  return this.edge[vertex] ? Object.keys(this.edge[vertex]).length : 0;
};

console.log(graph.sizeEdge("C"));

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
```

---

## 그래프 (4)

### 무방향 그래프일 때

```javascript
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
```
