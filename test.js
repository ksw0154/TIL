function Dictionary(items = {}) {
  this.items = items;
}

Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

Dictionary.prototype.has = function (key) {
  return this.items.hasOwnProperty(key);
};
function answer(class_1, class_2) {
  let result = [];

  let dict = new Dictionary();
  for (let i = 0; i < class_1.length; i++) {
    dict.set(class_1[i], true);
  }

  for (let i = 0; i < class_1.length; i++) {
    if (dict.has(class_2[i])) {
      result.push(class_2[i]);
    }
  }

  return result;
}

let class_1 = ["Kali", "Oliver", "Naomi"];
let class_2 = ["Oliver", "Naomi", "Maya"];

console.log(answer(class_1, class_2));
