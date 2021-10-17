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

---

## 이진 트리(4)

---

## 이진 트리(5)

---

## 이진 트리(6)
