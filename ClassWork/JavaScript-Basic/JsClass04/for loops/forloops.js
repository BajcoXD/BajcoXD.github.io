
for(let i = 0; i < 10; i++){
    console.log(i);
    
}

let workingDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(workingDays);

for(let i = 0; i < workingDays.length; i++){
    console.log(workingDays[i]);
    
}

console.log("This week Mon was non working day,so the working days are: ");
for(let i = 0; i < workingDays.length; i++){
    if(workingDays[i] === "Mon"){
        continue;
    }
    console.log(workingDays[i]);
}

let names = ["Martin", "Frose", "Angel", "Sandra", "Ana"];

let userInput = prompt("Please search for a name in my list: ")
for(let i = 0; i < names.length; i++){
    if(userInput === names[i]){
        console.log(names[i]);
        break;
    }
}
// for-of loop structure
let colors = ['blue','green','yellow','red']
for(let color of colors){
    console.log(color);
}