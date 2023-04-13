const refs = {
    inputEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),
};

refs.inputEl.addEventListener('input', event => {
    refs.spanEl.style.fontSize = event.currentTarget.value + 'px';
})