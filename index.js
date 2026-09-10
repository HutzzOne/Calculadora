function inserirNumero(numero) {
    const display = document.getElementById('display');
    display.value += numero;
}

function inserirOperador(operador) {
    const display = document.getElementById('display');
    display.value += operador;
}

function limpar() {
    const display = document.getElementById('display');
    display.value = '';
}

function calcular() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}
function inserirDecimal() {
    const display = document.getElementById('display');
    display.value += '.';
} 