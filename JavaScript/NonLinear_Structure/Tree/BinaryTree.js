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

// _inOrderTraverseNode() : 재귀로 트리를 순회하며 중위 순회 (내부 사용)
BinaryTree.prototype._inOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }

  this._inOrderTraverseNode(node.left, callback);
  callback(node);
  this._inOrderTraverseNode(node.right, callback);
};

// 전위 순회하며 노드를 출력
BinaryTree.prototype.inOrderTraverse = function (callback) {
  this._inOrderTraverseNode(this.root, callback);
};

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("****************** In-order ******************");
tree.inOrderTraverse(printNode);
console.log("end");

// _postOrderTraverseNode() : 재귀로 트리를 순회하며 전위 순회 (내부 사용)
BinaryTree.prototype._postOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }

  this._postOrderTraverseNode(node.left, callback);
  this._postOrderTraverseNode(node.right, callback);
  callback(node);
};

// 전위 순회하며 노드를 출력
BinaryTree.prototype.postOrderTraverse = function (callback) {
  this._postOrderTraverseNode(this.root, callback);
};

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("****************** Post-order ******************");
tree.postOrderTraverse(printNode);
console.log("end");

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
