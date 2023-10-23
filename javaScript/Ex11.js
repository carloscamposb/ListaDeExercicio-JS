// 11) Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58


const alt = parseFloat(prompt("Digite a sua altura "));

const peso = (72.7 * alt)-58;

alert ("O peso ideal para você é: " + peso.toFixed(2) + " kg");