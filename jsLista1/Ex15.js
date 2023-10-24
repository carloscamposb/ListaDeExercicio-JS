/*15) Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros,
 que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.
*/

const metros= parseFloat(prompt('Qual o tamanho em metros quadrados a ser pintado? '))
const cobertura= 3;
const lata = 18;
const valor=80;


const litrosNecessarios = metros/cobertura;

const latasNecessarias = Math.ceil(litrosNecessarios/lata); //arredonda para cima

const valorNecessario = latasNecessarias * valor;

alert ('Segue a quantidade de latas de tintas necessárias para a pintura: ' + latasNecessarias);
alert ('Segue o valor necessário a ser investido: R$ '+ valorNecessario);

