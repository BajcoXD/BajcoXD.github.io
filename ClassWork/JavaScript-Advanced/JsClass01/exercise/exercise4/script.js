const fontColor = document.getElementById("colorInput");
const fontSizing = document.getElementById("fontSizeInput");
const text = document.getElementById("textInput");
const generateBtn = document.getElementById("generateButton");
const titleContainer = document.getElementById("titleContainer");

generateBtn.addEventListener("click", function () {
  const newTitle = document.createElement("h1");
  // the new title => h1
  newTitle.style.color = fontColor.value;
  newTitle.style.fontSize = fontSizing.value;
  newTitle.textContent = text.value;

  // values for the text

  titleContainer.appendChild(newTitle);
});
