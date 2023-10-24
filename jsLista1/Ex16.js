/*Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, 
que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
comprar apenas latas de 18 litros;
comprar apenas galões de 3,6 litros;
misturar latas e galões, de forma que o desperdício de tinta seja menor.
Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.

*/
const metros = parseFloat(prompt('Informe o tamanho a ser pintado em metros quadrados'));
const cobertura = 6;
const lata = 18;
const valorLata = 80;
const galao = 3.6;
const valorGalao = 25;

const litrosNecessarios = (metros / cobertura)* 1.1;

const latasNecessarias = Math.ceil(litrosNecessarios / lata);
const valorLataNecessaria = latasNecessarias * valorLata;

const galoesNecessarios = Math.ceil(litrosNecessarios / galao);
const valorGalaoNecessario = galoesNecessarios * valorGalao;

const latasMelhorComb = Math.floor(litrosNecessarios / lata); //evitar disperdício : arredonda para baixo
const galoesRestantes = (litrosNecessarios % lata) / galao;
const combo = Math.ceil(galoesRestantes);
const precoTotalMelhorComb = (latasMelhorComb * valorLata) + (combo * valorGalao);

alert('Comprar apenas latas de 18 litros:\nQuantidade de latas: ' + latasNecessarias +
'\nPreço total: R$ ' + valorLataNecessaria.toFixed(2));

alert('\nComprar apenas galões de 3.6 litros:\nQuantidade de galões: ' + galoesNecessarios +
'\nPreço total: R$ ' + valorGalaoNecessario.toFixed(2));

alert('\nMelhor combinação entre latas e galões:\nQuantidade de latas: ' + latasMelhorComb +
'\nQuantidade de galões: ' + combo + '\nPreço total: R$ ' + precoTotalMelhorComb.toFixed(2));