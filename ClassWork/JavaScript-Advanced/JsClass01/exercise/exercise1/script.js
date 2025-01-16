let array = [];

for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0) {
    array.push(i);
  }
}
console.log(array);

let array2 = [];

for (let i = 1; i < 1000; i++) {
  if (i % 4 === 0) {
    array2.push(i);
  }
}
console.log(array2);

let array3 = [];

for (let i = 1; i < 1000; i++) {
  if (i % 10 === 1) {
    array3.push(i);
  }
}
console.log(array3);
