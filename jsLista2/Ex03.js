//Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

let sexo= prompt('Escolha o seu sexo F ou M').toUpperCase(); 

if (sexo === 'F'){ 
    alert ("Sexo feminino")   
}else if (sexo === 'M'){
    alert ("Sexo masculino")
}else{
    alert('Outro');
}


