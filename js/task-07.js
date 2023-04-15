const refs = {
    inputEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),
};

refs.spanEl.style.fontSize = refs.inputEl.value + 'px';

refs.inputEl.addEventListener('input', event => {
    refs.spanEl.style.fontSize = event.currentTarget.value + 'px';
})