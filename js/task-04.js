const refs = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    valueDisplay: document.querySelector('#value'),
};

let counterEl = 0;

refs.incrementBtn.addEventListener('click', () => {
    counterEl += 1;
    refs.valueDisplay.textContent = counterEl;

});
refs.decrementBtn.addEventListener('click', () => {
    counterEl -= 1;
    refs.valueDisplay.textContent = counterEl;

});



