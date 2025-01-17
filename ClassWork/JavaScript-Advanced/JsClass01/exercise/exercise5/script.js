const fontColor = document.getElementById("color");
const fontSizing = document.getElementById("fontSize");
const itemsCount = document.getElementById("items");
const generateBtn = document.getElementById("generateList");
const listContainer = document.getElementById("listContainer");

generateBtn.addEventListener("click", function () {
  const color = fontColor.value; // Get color value
  const fontSize = fontSizing.value + "px"; // Get font size value and append 'px'
  const itemCount = itemsCount.value; // Get item count

  const ul = document.createElement("ul");
  ul.style.color = color;
  ul.style.fontSize = fontSize;

  for (i = 1; i <= itemCount; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    ul.appendChild(li);
  }

  listContainer.innerHTML = "";
  listContainer.appendChild(ul);
});
