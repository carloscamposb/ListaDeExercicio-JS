/*Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
 Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!",
 conforme o caso.*/

 const turno = prompt ('Digite o turno que você estuda M-matutino, V-Vespertino ou N-Noturno').toUpperCase();
 

 switch (turno){
    case 'M':
    alert('Bom dia!');
    break;
    case 'V':
    alert('Boa tarde!');
    break;
    case 'N':
        alert('Boa noite!');
    break;
    default:
        alert('Valor inválido!')               
 }