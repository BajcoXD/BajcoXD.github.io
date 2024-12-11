let balance = 15000;
let amount = Number(prompt(`Your balance is ${balance}, enter the withdraw amount:`));

function atm() {
  if (amount < 0){
    return `The amount you input ${amount} is invalid`
  }
  if (amount <= balance) {
    balance -= amount;
    return `You withdrew ${amount}, and you have ${balance} remaning`;
  } else {
    return "Not enough balance";
  }
}

alert(atm(amount));
