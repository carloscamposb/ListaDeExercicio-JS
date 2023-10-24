/* Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps),
 calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).
*/


const arquivo = parseFloat(prompt('Informe o tamanho do arquivo para dowload em MB: '));
const velocidade = parseFloat(prompt('Informe a velocidade do link em Mbps: '));

const conversaoArquivo = arquivo * 8; //transforma para Mbps

const calculoVelocidade= (arquivo/velocidade)/ 60;  

alert(' o tempo aproximado de download usando esse link é de: ' + calculoVelocidade.toFixed(2) + ' minutos')

