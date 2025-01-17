function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b, rgbString: `rgb(${r}, ${g}, ${b})` };
}

console.log(getRandomColor());

// Get a random color
const randomColor = getRandomColor();

document.body.style.backgroundColor = randomColor.rgbString;

document.body.innerHTML = `<div>Background Color: <br>${randomColor.rgbString}</div>`;
