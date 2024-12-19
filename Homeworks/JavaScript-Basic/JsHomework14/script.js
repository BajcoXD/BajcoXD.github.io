let array = [
  null,
  undefined,
  NaN,
  "cat",
  "dog",
  "lion",
  "monkey",
  "dolphine",
  "parot",
  false,
];
function check(arrayLenght) {
  arrayLenght = array;
  return arrayLenght.filter(Boolean);
}
console.log(check());
