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

```javascript
function answer(s, e) {
  let s = 6;
  let e = 3;

  let sequence = [];

  sequence.push(s);
  sequence.push(e);
  let sum;
  while (true) {
    // let item1 = sequence.slice(-2)[0];
    // let item2 = sequence.slice(-2)[1];

    sum = s - e;
    s = e;
    e = sum;

    // if (item1 - item2 < 0) {
    //   break;
    // } else {
    //   sequence.push(item1 - item2);
    // }

    if (c < 0) break;
    sequence.push(e);
  }

  return sequence;
}
```
