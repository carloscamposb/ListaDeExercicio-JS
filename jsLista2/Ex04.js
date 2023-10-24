//Faça um Programa que verifique se uma letra digitada é vogal ou consoante.


const letra = prompt('Digite uma letra: ').toUpperCase();

if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'){
    alert ('Sua letra :  ' + letra + ' , é uma vogal ')

} else{
    alert ('Sua letra : ' + letra + ' , é uma consoante')
}