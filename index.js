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
    let resultado = limparResultado(eval(display.value));
    try {
        display.value = resultado;
    } catch (error) {
        display.value = 'Erro';
    }
}
function inserirDecimal() {
    const display = document.getElementById('display');
    display.value += '.';
} 
function limparResultado(numero) {
  return Number(Math.round(numero + 'e12') + 'e-12');
}