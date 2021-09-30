# JavaScript [기초 문제1]

## 별별별 - 반복문

```javascript
function answer(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += "*";
  }

  return result;
}
```

---

## 두 수 사이 숫자 - 반복문

```javascript
function answer(x, y) {
  let result = [];

  if (x > y) {
    let t = x;
    x = y;
    y = t;
    // ES6
    // [x, y] = [y, x]
  }

  for (let i = x; i <= y; i++) {
    result.push(i);
  }
  return result;
}
```

---

## 반평균 - 반복문

```javascript
function answer(score) {
  let average = 0;
  // let total = 0;

  for (let i = 0; i < score.length; i++) {
    // total += score[i];
    average += score[i];
  }

  // average = (total / score.length).toFixed(2);
  average = (average / score.length).toFixed(2);
  return average;
}
```

---

### 핸드폰 판매 - 반복문

```javascript
function answer(employee) {
  let employee_id;
  let max = 0;

  for (let i = 0; i < employee.length; i++) {
    if (max < employee[i]) {
      max = employee[i];
      employee_id = i;
    }
  }

  return employee_id + 1;
}
```

---

## 무한 뺼셈 - 반복문
