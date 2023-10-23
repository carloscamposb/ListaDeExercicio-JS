// Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.


const tempC = parseFloat(prompt('Passe a temperatura em Celsius: ')) 

const tempF= (tempC * 9/5) + 32;

alert('A temperatura informada convertida para Fahrenheit foi de: ' + tempF.toFixed(2) + "º")



