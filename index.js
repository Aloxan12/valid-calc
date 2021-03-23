const pluse = document.getElementById('pluse');
const minus = document.getElementById('minus');
const multyplay = document.getElementById('multyplay');
const divide = document.getElementById('divide');

const input1 = document.getElementById('number1');
const input2 = document.getElementById('number2');

const result = document.getElementById('result');

function onButtonPluse() {
    const numder1 = Number(input1.value);
    const numder2 = Number(input2.value);
    sum = numder1 + numder2;
    result.innerText = sum;
};
function onButtonMinus() {
    const numder1 = Number(input1.value);
    const numder2 = Number(input2.value);
    sum = numder1 - numder2;
    result.innerText = sum;
};

function onButtonMultyplay() {
    const numder1 = Number(input1.value);
    const numder2 = Number(input2.value);
    sum = numder1 * numder2;
    result.innerText = sum;
};

function onButtonDivide() {
    const numder1 = Number(input1.value);
    const numder2 = Number(input2.value);
    sum = numder1 / numder2;
    result.innerText = sum;
};

pluse.addEventListener('click', onButtonPluse);
minus.addEventListener('click', onButtonMinus);
multyplay.addEventListener('click', onButtonMultyplay);
divide.addEventListener('click', onButtonDivide);




