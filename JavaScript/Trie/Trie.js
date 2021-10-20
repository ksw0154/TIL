// TrieNode() : 문자값과 단어 여부 값 저장을 위한 노드 생성자
function TrieNode() {
  this.children = {}; // key : 문자, value : TrieNode
  this.endOfWord = false;
}

// Trie(): 노드의 시작인 루트 노드 저장을 위한 생성자
function Trie() {
  this.root = new TrieNode();
}

// insert() : 문자열 추가
Trie.prototype.insert = function (word) {
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];

    // 문자값을 가진 노드가 없을 때
    if (node === undefined) {
      node = new TrieNode();
      current.children[ch] = node;
    }

    // 새로 만든 노드로 current가 갱신된다.
    current = node;
  }

  // 마지막 current에는 단어의 끝을 표시해준다.
  current.endOfWord = true;
};

// search() : 문자열 검색
Trie.prototype.search = function (word) {
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];

    if (node === undefined) {
      return false;
    }

    current = node;
  }

  return current.endOfWord;
};

// delete()
Trie.prototype.delete = function (word, current = this.root, index = 0) {
  if (index === word.length) {
    if (!current.endOfWord) return false;

    current.endOfWord = false;

    return Object.keys(current.children).length === 0;
  }

  let ch = word[index];
  let node = current.children[ch];

  if (node === undefined) return false;

  let isDeleteNode = this.delete(word, node, index + 1) && !node.endOfWord;
  if (isDeleteNode) {
    delete current.children[ch];
    return Object.keys(current.children).length === 0;
  }

  return false;
};

let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

console.log(trie);
console.log(trie.root);
console.log(trie.search("be"));

trie.delete("bee");
console.log(trie.search("be"));
