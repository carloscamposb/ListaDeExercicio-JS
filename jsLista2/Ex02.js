//2) Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

const valor = parseFloat(prompt('Informe um valor'))

if (valor >=0){
    alert ('Valor selecionado: ' + valor + ' , é positivo')
} else {
    alert ('Valor selecionado: ' + valor + ' , é negativo')
}