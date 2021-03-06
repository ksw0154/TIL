## 이진 트리(1)

- 각각의 노드가 최대 두 개의 자식 노드를 가지는 트리 자료 구조

- 활용 방식
  - 검색과 정렬 : 이진 탐색 트리와 이진 힙 구현에 활용
  - 허프만 코딩 : 연관 분기 구조를 위한 데이터 표현에 활용

### 포화 이진 트리 (Perfect binary tree)

- 모든 레벨의 노드가 가득 채워져 있는 트리
- 특징
  - leaf 노드를 제외한 모든 자식은 2개의 노드를 보유
  - 노드의 개수: n = 2^h - 1

### 완전 이진 트리(Complete binary tree)

- 마지막 레벨 전까지 노드가 가득 채워져 있고, 마지막 레벨은 왼쪽부터 순차적으로 채워져 있는 트리
- 특징
  - 배열을 사용해 효율적인 표현이 가능
  - 노드의 개수 : n < 2^h - 1
- 마지막 레벨은 무조건 왼쪽부터 중간에 비워져있지 않고 채워져 있어야 한다.

### 정 이진 트리 (Full binary tree)

- 모든 노드가 0개 또는 2개의 자식 노드만 갖는 트리
- 특징
  - proper 또는 plane 이진 트리라고도 불린다.
  - 노드의 개수 : n <= 2^h - 1

### 편향 이진 트리 (Skewed binary tree)

- 왼쪽 혹은 오른쪽으로 편향되게 치우쳐 있는 트리
- 특징
  - 각각의 높이에 하나의 노드만 존재
  - 노드의 개수 : h

### 균형 이진 트리 (Balanced binary tree)

- 삽입 / 삭제가 이루어질 때, 왼쪽 서브 트리와 오른쪽 서브 트리의 높이 차이를 1 이하로 맞추는 이진 탐색 트리
- 특징
  - 서브 트리 높이 차이가 항상 1 이하로 유지
  - 균형 트리 종류 : AVL 트리, Red-Black 트리, B 트리, B+트리, B\* 트리

---

## 이진 트리(2)

### 이진 트리 순회 (Binary Tree Traversal)

- 각각의 노드가 최대 두 개의 자식 노드를 가지는 트리 자료 구조를 순회하는 방법

### 구현 메서드

- 노드 추가 : \_insertNode(), insert()
- 전위 순회(Pre-order) : \_preOrderTraverseNode(), preOrderTraverse()
- 중위 순회(In-order) : \_inOrderTraverseNode(), inOrderTraverse()
- 후위 순회(Post-order) : \_postOrderTraverseNode(), postOrderTraverse()
- 층별 순회(Level-order) : levelOrderTraverse()

---

## 이진 트리(3)

```javascript
// Node() : value와 left, right node 저장을 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// BinaryTree() : 시작 노드인 root를 저장하기 위한 생성자
function BinaryTree() {
  this.root = null;
}

// _insertNode() : 재귀로 트리를 순회하며 노드 추가 (내부 사용)
// 타 언어에서 private (내부적으로 함수를 호출할 때) 접근을 허용할 때 사용한다.
// 내부적으로 사용할 때 _를 앞에 붙여준다. (js에서는 의미적으로 사용한다.)
BinaryTree.prototype._insertNode = function (node, value) {
  // 재귀를 통해서 값을 넣어준다.
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value >= node.value) {
    node.right = this._insertNode(node.right, value);
  }
  return node;
};

// insert() : 노드 추가
BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

let tree = new BinaryTree();

tree.insert("F");
// this.root = null -> F
tree.insert("B");
// this.root = F -> _insertNode(node.left, value) -> node.left(F.left) == null -> B
tree.insert("A");
// this.root = F
// F.left = B
// F -> B -> _insertNode(node.left, value) -> node.left(B.left) == null -> A
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);
```

---

## 이진 트리(4)

### 전위 순회(Pre-order)

```javascript
// _preOrderTraverseNode() : 재귀로 트리를 순회하며 전위 순회 (내부 사용)
BinaryTree.prototype._preOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }

  callback(node);
  this._preOrderTraverseNode(node.left, callback);
  this._preOrderTraverseNode(node.right, callback);
};

// 전위 순회하며 노드를 출력
BinaryTree.prototype.preOrderTraverse = function (callback) {
  this._preOrderTraverseNode(this.root, callback);
};

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("****************** Pre-order ******************");
tree.preOrderTraverse(printNode);
console.log("end");
```

---

## 이진 트리(5)

#### 전위, 중위, 후위 순회는 callback(node)의 위치만 변경하면 된다.

### 중위 순회(In-order)

```javascript
// _inOrderTraverseNode() : 재귀로 트리를 순회하며 중위 순회 (내부 사용)
BinaryTree.prototype._inOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }

  this._inOrderTraverseNode(node.left, callback);
  callback(node);
  this._inOrderTraverseNode(node.right, callback);
};

// 중위 순회하며 노드를 출력
BinaryTree.prototype.inOrderTraverse = function (callback) {
  this._inOrderTraverseNode(this.root, callback);
};

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("****************** In-order ******************");
tree.inOrderTraverse(printNode);
console.log("end");
```

### 후위 순회 (Post-order)

```javascript
// _postOrderTraverseNode() : 재귀로 트리를 순회하며 후위 순회 (내부 사용)
BinaryTree.prototype._postOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }

  this._postOrderTraverseNode(node.left, callback);
  this._postOrderTraverseNode(node.right, callback);
  callback(node);
};

// 후위 순회하며 노드를 출력
BinaryTree.prototype.postOrderTraverse = function (callback) {
  this._postOrderTraverseNode(this.root, callback);
};

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("****************** Post-order ******************");
tree.postOrderTraverse(printNode);
console.log("end");
```

---

## 이진 트리(6)

### 층별 순회 (Level-order)

- 낮은 Level부터 순차적으로 순회
  1. root 노드 방문
  2. Level 증가
  3. 왼쪽에서 오른쪽 순으로 방문

```javascript
function Queue(array) {
  this.array = array ? array : [];
}

Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

// levelOrderTravers() : 층별 순회하며 노드 출력
BinaryTree.prototype.levelOrderTravers = function (callback) {
  let q = new Queue();
  let node;
  q.enqueue(this.root);
  while (!q.isEmpty()) {
    node = q.dequeue();
    callback(node);
    if (node.left !== null) q.enqueue(node.left);
    if (node.right !== null) q.enqueue(node.right);
  }
};

console.log("****************** Level-order ******************");
tree.levelOrderTravers(printNode);
console.log("end");
```
