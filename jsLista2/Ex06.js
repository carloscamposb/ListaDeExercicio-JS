// 6) Faça um Programa que leia três números e mostre o maior deles.

const num1 = parseFloat(prompt('Informe o primeiro número: '));
const num2 = parseFloat(prompt('Informe o segundo número: '));
const num3 = parseFloat(prompt('Informe o terceiro número: '));

if (num1 === num2 && num2 === num3) {
    alert('Os três números são iguais.');
} else if (num1 === num2) {
    alert('O número ' + num1 + ' é o maior e se repete duas vezes.');
} else if (num1 === num3) {
    alert('O número ' + num1 + ' é maior e se repete duas vezes');
} else if (num2 === num3) {
    alert('O número ' + num2 + ' é maior e se repete duas vezes');
} else {
    if (num1 > num2 && num1 > num3) {
        alert('O número ' + num1 + ' é o maior.');
    } else if (num2 > num1 && num2 > num3) {
        alert('O número ' + num2 + ' é o maior.');
    } else if (num3 > num1 && num3 > num2) {
        alert('O número ' + num3 + ' é o maior.');
    }
}

