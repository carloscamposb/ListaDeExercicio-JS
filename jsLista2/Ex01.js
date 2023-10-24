// 1) Faça um Programa que peça dois números e imprima o maior deles.



const num1 = parseFloat(prompt('Informe um número '))
const num2= parseFloat(prompt('Informe outro número '))

if (num1 > num2 ){
    alert ('O numero: ' + num1 + 'É maior que o número: ' + num2);

}else if (num2 > num1) {
    alert ('O numero: ' + num2 + 'É maior que o número: ' + num1);

} else if (num1 === num2){
    alert ('Os numeros são iguais: ' + num1);

}else {
    alert ("Erro ao digitar! Reinicie o programa e tente novamente")
}    


