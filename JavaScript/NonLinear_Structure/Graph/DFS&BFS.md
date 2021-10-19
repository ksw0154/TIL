## DFS (Depth First Search) & BFS (Breadth First Search)

## DFS (1)

- 트리나 그래프 등에서 하나의 노드를 최대한 깊게 들어가면서 해를 찾는 기법
- 깊이 우선 탐색

### 장 / 단점

- 장점 : 인접한 후보 노드만 기억하면 되므로 적은 기억 공간 소요, 노드가 깊은 단계에 있을 경우 빠르게 정답 산출
- 단점 : 선택한 경로가 답이 아닐 경우 불필요한 탐색 가능, 최단 경로를 구할 시 찾은 해가 정답이 아닐 경우 발생

### 구현 메서드

- 재귀를 이용한 탐색 : \_dfsRecursiveVisit()
- 스택을 이용한 탐색 : \_dfsLoopVisit()

---

## DFS (2)

```javascript
// dfs() : DFS 탐색
Graph.prototype.dfs = function (startVertex) {
  this._dfsRecursiveVisit(startVertex);
};

// _dfsRecursiveVisit() : 재귀를 이용한 DFS 탐색
// 재귀에서 중요한 부분
// 1. 종료 조건을 만들어야 한다.
// 2. 재귀 호출을 하면서 수행해야할 코드를 작성한다.
Graph.prototype._dfsRecursiveVisit = function (vertex) {
  if (this.visited[vertex]) {
    return;
  }

  this.visited[vertex] = true;
  console.log(`visit "${vertex}"`);

  let neighbors = this.edge[vertex];
  for (let i = 0; i < neighbors.length; i++) {
    this._dfsRecursiveVisit(neighbors[i]);
  }
};
```

```javascript
let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
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

graph.dfs("A");
```

---

## DFS (3)

```javascript
import { Stack } from "./Stack.mjs";

// dfs() : DFS 탐색
Graph.prototype.dfs = function (startVertex) {
  this._dfsLoopVisit(startVertex);
};

// _dfsLoopVisit() : 스택을 이용한 DFS 탐색
Graph.prototype._dfsLoopVisit = function (vertex) {
  let stack = new Stack();
  stack.push(vertex);

  while (!stack.isEmpty()) {
    let vertex = stack.pop();
    if (this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      stack.push(neighbors[i]);
    }
  }
};
```

```javascript
let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
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

graph.dfs("A");
```

---

## BFS(1)

- Breadth First Search (너비 우선 탐색)
- 트리나 그래프 등에서 인접한 노드를 우선 방문하면서 넓게 움직이며 해를 찾는 탐색 기법
- 장점 : 최단 경로 탐색에서 구한 해가 정답임을 보장
- 단점 : 경로가 매우 길어질 경우, 탐색 범위가 증가하면서 DFS보다 많은 기억 공간이 필요
- 미로 탐색, 네트워크 라우팅 Path 등의 쓰인다.

### 구현 메서드

- 큐를 이용한 감색 : \_bfsLoopVisit()
- 최단 경로 탐색 : shortestPath(), bfsShortestPath(), \_from_to_path()

---

## BFS(2)

```javascript
import { Queue } from "./queue.mjs";

function Graph() {
  this.edge = {};
  this.visited = {};
}

Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
  this.visited[v] = false;
};

Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
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

// BFS()
Graph.prototype.bfs = function (startVertex) {
  this._bfsLoopVisit(startVertex);
};

// _bfsLoopVisit() : 큐를 이용한 BFS 탐색
Graph.prototype._bfsLoopVisit = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();
    if (this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      queue.enqueue(neighbors[i]);
    }
  }
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
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

graph.bfs("A");
```

---

## BFS(3)

### \_bfsShortestPath() : 다른 정점 간 최단 경로 비용 산출

```javascript
Graph.prototype._bfsShortestPath = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  let distance = {};
  let pre_visit = {};
  for (let vertex in this.edge) {
    distance[vertex] = 0;
    pre_visit[vertex] = null;
  }

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      if (!this.visited[neighbors[i]]) {
        distance[neighbors[i]] = distance[vertex] + 1;
        pre_visit[neighbors[i]] = vertex;
        queue.enqueue(neighbors[i]);
      }
    }
  }

  return { distance, pre_visit };
};

console.log(graph._bfsShortestPath("A"));
```

---

## BFS(4)

```javascript
// _from_to_path() : from 정점에서 to 정점으로 최단 경로 출력
Graph.prototype._from_to_path = function (pre_visit, from, to) {
  let stack = new Stack();

  for (let v = to; v !== from; v = pre_visit[v]) {
    stack.push(v);
  }
  stack.push(from);

  while (!stack.isEmpty()) {
    let v = stack.pop();
    process.stdout.write(`${v} -> `);
  }
  console.log("end");
};

// shortestPath() : 다른 정점 간 최단 경로 탐색
Graph.prototype.shortestPath = function (startVertex) {
  let result = this._bfsShortestPath(startVertex);

  console.log(result.distance);
  console.log(result.pre_visit);

  for (let vertex in this.edge) {
    if (vertex === startVertex) continue;

    this._from_to_path(result.pre_visit, startVertex, vertex);
  }
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}
```
