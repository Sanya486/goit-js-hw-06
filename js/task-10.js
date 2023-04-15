function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const refs = {
  inputEl: document.querySelector('input[type="number"]'),
  creatBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  divBoxesEl: document.querySelector('#boxes'),
};

refs.inputEl.addEventListener('change', (event) => {
  let amountValue = 0;

  if (Number(event.currentTarget.value) >= Number(event.currentTarget.min) && Number(event.currentTarget.value) <= Number(event.currentTarget.max)){
    amountValue = Number(event.currentTarget.value);
  refs.creatBtn.addEventListener('click', createBoxes(amountValue));
  }
  else {
    alert('Ввели невірне число!')
  }
});

refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for(let i = 0; i < amount; i += Number(refs.inputEl.step)){
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor(),
    boxEl.style.width = 30 + i * 10 + 'px';
    boxEl.style.height = 30 + i * 10 + 'px';
    boxEl.classList.add('box')
    refs.divBoxesEl.append(boxEl);
  }
}

function destroyBoxes() {
  refs.divBoxesEl.innerHTML = '';
  refs.inputEl.value = '';
};
