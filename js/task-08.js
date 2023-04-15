const refs = {
    formEl: document.querySelector('.login-form'),
};

refs.formEl.addEventListener('submit', formHandler)

function formHandler (event){
    event.preventDefault();
    const {elements: {email, password}} = event.currentTarget;
    if(email.value === ''|| password.value === ''){
        alert('Всі поля мають бути заповнені!');
    }
    else {
        const userData = {
        email: email.value,
        password: password.value,
    };
    console.log(userData);
    refs.formEl.reset();
    }  
}
    