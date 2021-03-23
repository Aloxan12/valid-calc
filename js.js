const form = document.getElementById('form');
const uname = document.getElementById('name');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const elementError = document.getElementById('error');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    let message = []
    if(uname.value.length <=6 ){
        message.push('Поле имени меньше 6 символов');
        //uname.style.border = '2px solid red';
        uname.classList.add('error');
    }else{
        uname.style.border = '2px solid green';
        message.push('Всё верно');
    }

    if(password.value.length <= 6){
        message.push('Пароль меньше 6 символов');
        password.style.border = '2px solid red';
    }else{
        password.style.border = '2px solid green';
        message.push('Всё верно');
    }

    if(message.length>0 ){
        elementError.innerText = message.join(' , ');
    }
};