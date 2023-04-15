const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) => {

    if (Number(inputEl.dataset.length) === event.currentTarget.value.length){
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    }

    else if (Number(inputEl.dataset.length) !== event.currentTarget.value.length && event.currentTarget.value.length > 0){
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
    else {
        inputEl.classList.remove('invalid');
        inputEl.classList.remove('valid');
    }
})