/*João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) 
deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) 
e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável 
multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
*/

const pesoPeixe = parseFloat(prompt('Olá Joao! por favor informe o peso total dos seus pescados: '));

if (pesoPeixe <= 50){
    alert ('Tudo certo João! Não há multas a pagar');
}else if (pesoPeixe > 50){
    const excedente = pesoPeixe - 50;
    const multa = excedente * 4;
    alert ('João, infelizmente você excedeu ' + excedente + ' do peso recomendado. \n Por isso terá que pagar uma multa de: ' + multa.toFixed(2) + ' reais')
} else {
    alert ('Algo deu errado, reinicie o programa e tente novamente');
    process.exit(1);

}




