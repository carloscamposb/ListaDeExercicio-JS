/* Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
C = 5 * ((F-32) / 9).*/


const tempF = parseFloat(prompt('Passe a temperatura em Fahrenheit: ')) 

const tempC= 5*((tempF-32)/9);

alert('A temperatura informada convertida para graus celcius foi de: ' + tempC.toFixed(2) + "º")


