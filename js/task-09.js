function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  bodyEl: document.querySelector('body'),
  changeColorBtn: document.querySelector('.change-color'),
  displaySpanEl: document.querySelector('.color'),
}

refs.changeColorBtn.addEventListener('click', changeColor)

function changeColor () {
  const currentColor = getRandomHexColor()
  refs.bodyEl.style.backgroundColor = currentColor;
  refs.displaySpanEl.textContent = currentColor;
}