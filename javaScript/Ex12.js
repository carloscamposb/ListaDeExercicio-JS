/* Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7 */

const alt = parseFloat(prompt('Escreva a sua altura: '));

let sexo= prompt('Escolha o seu sexo M ou H').toUpperCase(); //aplicada a string resultante da variavel sexo

let peso

if (sexo === 'M'){ 
sexo='Feminino';    
peso =  (62.1*alt) - 44.7;   
}else if (sexo === 'H'){
sexo= 'Masculino';
peso = (72.7*alt) - 58;   
}else{
 alert('Escolha incorreta');
 process.exit(1); //finaliza e sai do programa
}


alert ("Por ser do sexo "+ sexo + " seu peso ideal é de: " + peso.toFixed(2) + " kg")