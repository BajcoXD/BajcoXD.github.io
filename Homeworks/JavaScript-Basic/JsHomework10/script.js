function combineNames(firstNames, lastNames) {
  if (firstNames.length !== lastNames.length) {
    return 'Error: Try again with the same lenght';
  }

  let fullNames = [];

  for (let i = 0; i < firstNames.length; i++) {
    fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
  }

  return fullNames;
}

let first = ['Viktor', 'Marijan'];
let last = ['Stojanovski', 'Nikolovski'];
let full = combineNames(first, last);

console.log(full);
