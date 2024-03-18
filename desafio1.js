
    // Escreva um código em JavaScript que resolva o problema descrito no livro 
    // Lógica de Programação I, p. 20, em que temo que obter as 3 notas de um
    // aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se
    // se ficou para exame. Não é necessário ler as notas,voce pode definí-las com 
    // variáveis.
    
const NotaA = 10; //como controlaremos o valor da variavel usamos CONST//
const NotaB = 8;
const NotaC = 7;
const media = (NotaA + NotaB + NotaC) / 3;
    
if (media >=7){  //inicio da estrutura de decição)
    console.log(`APROVADO`);
}
else if (media >=5){
    console.log(`EXAME`);
}
else {
    console.log(`REPROVADO`);
}

// const
// nota1 = 10
// nota2 = 8;
// nota3 = 7;
// media = (nota1 + nota2 + conta3) / 3; (considerar a MEDIA como objeto - as variáveis - e usamos
// os metodos

//const condiçãoaprovado = media >= 7;//
//const condiçãoExame= media < 7 && media >=5;
//
//if (condicaoAprovado) {
//    console.log (`O aluno foi APROVADO com média $(media)`);//
//}
//else if (condicaoExame){
//  console.log (`O aluno está em EXAME com média $(media)`);//
//}
//else {}
//  console.log(`O aluno foi REPROVADO`);

//OU DESTA FORMA: 

// const
// nota1 = 10
// nota2 = 8;
// nota3 = 7;
// media = (nota1 + nota2 + conta3) / 3;

//
//if (media >= 5) {
//    console.log (`O aluno foi APROVADO com média $(media)`);//
//}
//else if (condicaoExame){
//  console.log (`O aluno está em EXAME com média $(media)`);//
//}
//else {}
//  console.log(`O aluno foi REPROVADO`);

