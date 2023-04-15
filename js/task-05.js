const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', (event) => {
    refs.spanEl.textContent = event.currentTarget.value;

    if(event.currentTarget.value === ''|| event.currentTarget.value.trim() === ''){
        refs.spanEl.textContent = 'Anonymous';
    };
    
});