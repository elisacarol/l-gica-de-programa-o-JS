
    // Escreva um código em JavaScript que resolva o problema descrito no livro 
    // Lógica de Programação I, p. 20, em que temo que obter as 3 notas de um
    // aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se
    // se ficou para exame. Não é necessário ler as notas,voce pode definí-las com 
    // variáveis.
    
const NotaA = 10;
const NotaB = 8;
const NotaC = 7;
const media = (NotaA + NotaB + NotaC) / 3;
    
if (media >=7){
    console.log(`APROVADO`);
}
else if (media >=5){
    console.log(`EXAME`);
}
else {
    console.log(`REPROVADO`);
}
