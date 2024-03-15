# l-gica-de-programa-o-JS
treinando a logica da programação com JavaScript

## operadores-aritmeticos.js

~~~js
const numero1 = 40;
const numero2 = 20;
~~~

A palavra `const` é utilizada para declarção de variáveis que não serão 
atribuidas (não permite reatribuição.)

Aqui declaramos duas constantes que serão calculadas no bloco a seguir:

~~~js
console.log(`Os números das operações são ${numero1} e ${numero2}`)
console.log(`A soma dos números é ${numero1 + numero2}`);
console.log(`A subtracao dos números é ${numero1 - numero2}`);
console.log(`A multiplicacao dos números é ${numero1 * numero2}`);
console.log(`A divisao dos números é ${numero1 / numero2}`);
console.log(`A resto dos números é ${numero1 % numero2}`);
~~~


Em cada uma das operações temos um operador aritmético:

* `+` -> soma
* `-` -> subtração
* `*` -> multiplicação
* `/` -> divisão
* `%` -> resto

## operadores-atribuicao.js

~~~js
let numero = 10;

~~~
Declaramos a variavel `numero`usando a palavra `let, pois essa variável sera **reatribuída** ao longo do nosso código.

Em seguida, fazemos uma série de reatribuições usando os operadores de atribuição:

~~~js
console.log(`O número é inicialmente igual a ${numero}`);
console.log(`Após atribuir somando o número 10:${numero +=10}`);
console.log(`reatribuindo e subtraindo 10: ${numero -=10}`);
console.log(`reatribuindo e multiplicando 10: ${numero *=10}`);
console.log(`reatribuindo e dividindo 10: ${numero /=10}`);
console.log(`reatribuindo para o resto da divisão por 10:
${numero = numero %= 10}`);
console.log(`Incrementando o número em 1: ${++numero}`);
console.log(`Decrementando o número em 1: ${--numero}`);
console.log(`O número final é igual a ${(numero)}`);
~~~

Operadores de atribuição:

* `+=` -> atribuição com soma
* `-=` -> atribuição com subtração
* `*=` -> atribuição com multiplicação
* `/=` -> atribuição com divisão< >
* `$=` -> atribuição com resto de divisão
* `++` -> atribuição com **incremento 1** (pode ser pré ou pós incrementado).
Ex. `numero ++` (pós-incremento) ou `numero ++` pré-incremento.
* `--` -> atribuição com **decremento 1**  (pode ser pré ou pós decramentado).
Ex `numero --` (pós-decremento) ou `-- numero`(pré-decremento)


## operadores-comparação.js


Neste arquivo conhecemos os operadores de comparação e a estrutura
lógica da decisão **if-else**

~~~js
if (condicao){;
    console.log (`VERDADEIRO`);
}else{
    console.log (`FALSO`);
}
~~~
Esta estrutura exibe no console se a condição testada é verdadeira ou falsa.
A condição armazena o resultado da **comparação entre duas variáveis**, como
segue

~~~js
* `==` -> é igual
* `===` -> é estritamente igual *(valor e tipo)*
* `!==` -> não é estritamente igual *(valor e tipo)*
* `!=` -> não é igual 
* `>` -> maior que
* `<` -> menor que
* `>=` -> maior ou igual
* `<=` -> menor ou igual 

~~~js

Escreva um código em JavaScript que resolva o problema descrito no livro
Logica da Programação de Programação I, pag.20 , em que o tema que obter 3 notas
de um aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou
para exame.Não é necessário ler as notas, você pode defini-las com variáveis.

Você precisará utilizar uma estrutura de decisão composta como a seguir:

~~~

~~~js
if (condicao) {
    // codigo da condicao//
}else if (condicao){

}
