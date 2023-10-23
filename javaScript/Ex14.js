/*Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 
8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
salário bruto.
quanto pagou ao INSS.
quanto pagou ao sindicato.
o salário líquido.
calcule os descontos e o salário líquido, conforme a tabela abaixo:
+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$
Obs.: Salário Bruto - Descontos = Salário Líquido.

*/

const qtHora = parseFloat(prompt('Quanto você ganha por hora? '));
const mesHora = parseFloat(prompt('Qual o número de horas trabalhadas no mês? '));

const salarioBruto = qtHora * mesHora;

const impostoRenda = salarioBruto * 0.11;
const inss = salarioBruto * 0.08;
const sindicato = salarioBruto * 0.05;
const descontos = impostoRenda + inss + sindicato;
const salarioLiquido = salarioBruto - descontos;

alert(
    "+ Salário Bruto: R$ " + salarioBruto.toFixed(2) +
    "\n - IR (11%): R$ " + impostoRenda.toFixed(2) +
    "\n - INSS (8%): R$ " + inss.toFixed(2) +
    "\n - Sindicato (5%): R$ " + sindicato.toFixed(2) +
    "\n = Salário Líquido: R$ " + salarioLiquido.toFixed(2)
);