function sumMaxMin(arr) {
  let numbersOnly = arr.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  if (numbersOnly.length === 0) {
    return "Error: No valid numbers in the array.";
  }

  let max = Math.max(...numbersOnly);
  let min = Math.min(...numbersOnly);

  let sum = max + min;

  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

let arr = [22, "one", "2", null, 34, 55, 2];
console.log(sumMaxMin(arr));
