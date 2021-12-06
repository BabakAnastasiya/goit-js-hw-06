function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
let spanEl = document.querySelector('.color')
buttonChangeColor.addEventListener ('click', changeColor);

function changeColor(color) {
  const newColor = getRandomHexColor();
  console.log (newColor);
    document.body.style.backgroundColor = newColor;
    spanEl.textContent=newColor
}
