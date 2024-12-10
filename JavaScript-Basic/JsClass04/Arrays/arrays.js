//
let emptyArray = [];
console.log(emptyArray);
console.log(typeof emptyArray);

// Array of string values
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(days);

// Mixed values array
let mixedArray = ["Martin", 12, true, undefined, null, 22.4, NaN];
console.log(mixedArray);

// Access an element from the array by its position
let firstElement = mixedArray[0];
console.log(`First element of mixed array: ${firstElement}`);

let sunday = days[6];
console.log(sunday);

// Change value of an exsisting element of the array
mixedArray[0] = "Frose";
console.log(`The mixed array after the change is:`);
console.log(mixedArray);

// Lenght of an array
console.log(`The lenght of the days array is: ${days.length}`);

// Add new element in the array
mixedArray[7] = "Amgel";
console.log(mixedArray);

mixedArray[mixedArray.length] = "Sandra";
console.log(mixedArray);

// Insert element in an array push() unshift()
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6); // insert element at the end of the array
numbers.push(7); // insert element at the end of the array
numbers.push(8, 9, 10); // insert as much elements as you need
console.log(numbers);
numbers.push("Martin", "Frose");
console.log(numbers);
numbers.unshift(-2, -1, 0);
console.log(numbers);

// Delete an element frim an array pop() shift()
numbers.pop();
numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);
