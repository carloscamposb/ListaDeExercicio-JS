/* Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
o produto do dobro do primeiro com metade do segundo .
a soma do triplo do primeiro com o terceiro.
o terceiro elevado ao cubo.*/


const numInt1 = parseFloat(prompt('Informe um número inteiro: '));
const numInt2 = parseFloat(prompt('Informe outro número inteiro: '));
const numFlo = parseFloat(prompt('Informe um número real: '));

const prod = (numInt1*2) * (numInt2/2);
const soma = (numInt1*3)+ numFlo;
const elevado= match.pow(numFlo,3);

alert ('O produto do dobro do primeiro numero com a metade do segundo numero foi: ' + prod +
       '\n A soma do triplo do primeiro número com o terceiro número foi: ' +soma +
       '\n O terceiro número elevado ao cubo resultou no valor de: ' + elevado);
