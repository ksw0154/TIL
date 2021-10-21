// 1번 후위 순회 (트리)
// 이진 탐색 트리 기반으로 insert method를 만들 수 있는가?

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.root = null;
}

BinaryTree.prototype._insertNode = function (node, value) {
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value > node.value) {
    node.right = this._insertNode(node.right, value);
  }

  return node;
};

BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

BinaryTree.prototype.postOrderTraverse = function (node, array) {
  if (node === null) return;

  this.postOrderTraverse(node.left, array);
  this.postOrderTraverse(node.right, array);
  array.push(node.value);
};

function answer(str) {
  let result = [];

  let tree = new BinaryTree();
  for (let i = 0; i < str.length; i++) {
    tree.insert(str[i]);
  }
  tree.postOrderTraverse(tree.root, result);

  return result;
}

let input = ["ABC", "FBADCEGIH", "CBAEDFG"];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
