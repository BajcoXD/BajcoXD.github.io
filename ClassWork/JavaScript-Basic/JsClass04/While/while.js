
let a = 1;
while (a <= 10) {
  console.log(a);
  a++; // a = a + 1;
}

let fruits = ["apple", "bannana", "orange", "grape"];
console.log(fruits);
let count = 0;
while (count < fruits.length) {
  console.log(`${count}: ` + fruits[count]);
  count++;
}

// do/while, another looping structure
let b = 5;
let c = 5;
console.log("==== do/while =====");

do {
  console.log("Hello " + c);
  c++;
} while (c < 5);

console.log("====== While ======");

while (b<5){
    console.log("Hello " + b);
    b++;
}