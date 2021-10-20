## 트라이

### 트라이 (Trie)

- 탐색 트리의 일종, 문자열이나 연관 배열을 저잡하는데 사용되는 트리 자료 구조

### 트라이 특징

- 문자열 검색에 특화된 자료구조
- 문자열 길이가 M인 경우 O(M)의 시간복잡도로 검색 가능
- 노드(문자열)의 재활용을 극대화한 자료구조

### 구현 메서드

- 데이터 추가 / 검색 / 삭제 : insert(), search(), delete()

---

## 트라이 구현(1)

```javascript
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

let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

console.log(trie);
```

---

## 트라이 구현(2)

```javascript
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

console.log(trie.search("be"));
```

---

## 트라이 구현(3)

```javascript
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

trie.delete("bee");
console.log(trie.search("be"));
```
