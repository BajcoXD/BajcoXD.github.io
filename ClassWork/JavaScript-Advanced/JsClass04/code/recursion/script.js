console.log("=========== RECURSION ==========");

// ===> Example: Factoriel
// 5! = 5 * 4 * 3 * 2 * 1
function factoriel(number) {
  if (number <= 1) {
    return 1;
  }
  return number * factoriel(number - 1);
}
// step by step
// 1) 5 => 5 * factorial(4)
// 2) 4 => 4 * factorial(3)
// 3) 3 => 3 * factorial(2)
// 4) 2 => 2 * factorial(1)
// 5) 1 => 1
// Result => 120
console.log(factoriel(5));

function sumToNumber(number) {
  if (number === 0) {
    return 0;
  }
  return number + sumToNumber(--number); // we put -- first then number for a reason
}
console.log(sumToNumber(5));

// =====> Example: Fibonaci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonaci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
}
console.log(`Fibonaci of 5 is : ${fibonaci(5)}`);

console.log(`Fibonaci of 25 is : ${fibonaci(25)}`);