/* 7) Faça um Programa que pergunte quanto você ganha por hora e o 
 número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês. */


 const valorHora = parseFloat(prompt("Quanto você ganha por hora? "))
 const numHoras= parseFloat(prompt('Informe agora o número de horas trabalhadas no mês'))

 const mes = valorHora * numHoras

 alert ("Você ganhou nesse mês: R$ " + mes.toFixed(2)) // toFixed(2) formata o resultado com duas casas decimais. 

