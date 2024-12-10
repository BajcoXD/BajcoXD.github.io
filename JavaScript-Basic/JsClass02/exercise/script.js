console.log();
let input = prompt("Enter a the amount of money:")
console.log(input);
console.log(typeof input);

console.log("After parsing the input in to integer");

let parsedNumber = parseInt(input);
console.log(parsedNumber);
console.log(typeof parsedNumber);
if (parsedNumber < 100) {
    console.log("Kupi leb");
} 