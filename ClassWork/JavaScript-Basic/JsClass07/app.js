let firstHeader = document.getElementById("myTitle");
console.log(firstHeader.textContent);
console.log(firstHeader.innerText);

firstHeader.innerText = "asdasd ";

let secondDiv = document.querySelector(".myDiv");
secondDiv.innerHTML += `
<ol>
<li>Intro the Web</li>
<li>Basic Web Development</li>
<li>Basic JavaScript</li>
</ol>
`;

let secondHeader = document.getElementById("secondHeader");
setTimeout(function () {
  secondHeader.innerText = "Nooo, not so cool page";
  console.log(secondHeader.innerText);
  setTimeout(function () {
    secondHeader.innerText = "i was joking";
    console.log(secondHeader.innerText);
  }, 2000);
}, 3000);

secondHeader.innerText = ":D";
