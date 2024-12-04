let phones = 30;
let price = 119.95;
let tax = 5 / 100;

console.log("The order is: ",phones , "Phones");
console.log("The price of one phone is:",price,"$");
console.log("The tax is 5%" );

let taxCost = price * tax;

let priceAfterTax = price + taxCost;

let totalPrice = priceAfterTax * phones;

console.log("The total cost would be: ", totalPrice, "$");