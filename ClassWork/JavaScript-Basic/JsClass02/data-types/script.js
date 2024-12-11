console.log("================ STRINGS ============");

let firstName;
firstName = "Bobo";

let lastName = "Bobsky";

// ====> using double quotes

let doubleQuotes = "This is a string with diubke quotes";
// ===> single quotes
let singleQuotes = "This is a string with single quotes";
// ===>
let backTickString = `This is a string with backsticks
(template literals)`;

console.log("========== Combining Strings =========");
// ====> using '+'
let fullName = "First name:" + " " + firstName;
console.log(fullName);

console.log("Last name:" + " " + lastName);
console.log(firstName + " is " + 30 + " years old");
console.log(2 + 2);
console.log(2 + "2");

fullName = `Full name ${firstName} ${lastName}`;
console.log(fullName);

console.log("========== Quotes within strings =============");
// let sentence = 'This isn't posible'
let sentence1 = "This isn't hard";
let sentence2 = 'He replaied: "Hey there"';
let sentence3 = "This isn't posible";
let sentence4 = "'TO BE' or 'NOT TO BE'";
let sentence5 = `"${sentence4}, the question is now"`;
console.log(sentence5);

console.log();
console.log("=========== NON-VALUE VALUES ==========");

// undefined
let undefinedVariable;
console.log(undefinedVariable);

// null
let emptyVariable = null;
console.log(emptyVariable);

console.log();
console.log("=========== SPECIAL NUMBERS =========");

console.log("========= NaN ========="); // Not a Number
console.log(typeof NaN);
let reasult = 100 / "deset";
console.log(reasult);

console.log(isNaN(reasult)); // true
console.log(isNaN("tekst")); // true
console.log(Number.isNaN("tekst")); //false

console.log("======= Infinity ========");
let infinity = Infinity;
console.log(infinity);
console.log(typeof infinity);

console.log(1/0);
console.log(-1/0);
