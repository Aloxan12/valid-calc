const passwordInput = document.getElementById('password2');
const showButton = document.getElementById('button');

showButton.addEventListener('click', onShow);

function onShow(){
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        showButton.innerHTML = 'Hide';
    }else{
        passwordInput.type = 'password';
        showButton.innerHTML = 'Show';
    }
}