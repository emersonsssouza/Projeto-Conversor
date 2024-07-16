let res = document.getElementById('res');
function Celsius() {
    const number1 = document.getElementById('number1');
    const numValor1 = number1.value;
    let Convert = (numValor1 * 1.8 + 32).toFixed(1);
    if (Convert == 0) {
        res.innerHTML = `O resultado é ${Convert}`;
    } else if (Convert == NaN) {
        res.innerHTML = "O valor digitado não é valido";
    } else {
        res.innerHTML = `${numValor1}º graus Celsius é igual a ${Convert}º graus Fahrenheit`;
        number2.value = Convert;
    }
}
function Fahrenheit() {
    const number2 = document.getElementById('number2');
    const numValor2 = number2.value;
    let convertFah = ((numValor2 - 32) / 1.8).toFixed(1);
    if (convertFah == 0) {
        res.innerHTML = `O resultado é ${convertFah}`;
    } else if (convertFah == NaN) {
        res.innerHTML = "O valor digitado não é valido";
    } else {
        res.innerHTML = `${numValor2}° graus Fahrenheit é igual a ${convertFah}º graus Celsius`;
        number1.value = convertFah;
    }
}
function limparConteudo() {
    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');
    number1.value = '';
    number2.value = '';
    res.innerHTML = '';
}