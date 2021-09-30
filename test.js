let s = 9;
let e = 3;

let sequence = [];

sequence.push(s);
sequence.push(e);

while (true) {
  let item1 = sequence.slice(-2)[0];
  let item2 = sequence.slice(-2)[1];

  if (item1 - item2 < 0) {
    break;
  } else {
    sequence.push(item1 - item2);
  }
}

console.log(sequence);
