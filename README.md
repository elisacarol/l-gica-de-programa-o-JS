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
console.log(`O resto da divisão dos números è ${numero 1 % numero2}`)`;
console.log(`O número elevado à potencia do numero 2 é ${numero1 ** numero2}`);
~~~


Em cada uma das operações temos um operador aritmético:

* `+` -> soma
* `-` -> subtração
* `*` -> multiplicação
* `/` -> divisão
* `%` -> resto da divisão
* `**`-> potenciação

## operadores-atribuicao.js

~~~js
let numero = 10;

~~~
Declaramos a variavel **numero** usando a palavra **let**, pois essa variável sera **reatribuída** ao longo do nosso código.

Em seguida, fazemos uma série de reatribuições usando os operadores de atribuição:

~~~js
console.log(`O número é inicialmente igual a ${numero}`);
console.log(`Após atribuir somando o número 10:${numero +=10}`);
console.log(`reatribuindo e subtraindo 10: ${numero -=10}`);
console.log(`reatribuindo e multiplicando 10: ${numero *=10}`);
console.log(`reatribuindo e dividindo 10: ${numero /=10}`);
console.log(`reatribuindo para o resto da divisão por 10:
${numero %= 10}`);
console.log(`Incrementando o número em 1: ${++numero}`);
console.log(`Decrementando o número em 1: ${--numero}`);
console.log(`O número final é igual a ${(numero)}`);
~~~

Operadores de atribuição:
* `=` -> atribuição de um valor à variável
* `+=` -> atribuição com soma
* `-=` -> atribuição com subtração
* `*=` -> atribuição com multiplicação
* `/=` -> atribuição com divisão
* `**` -> atribuição com potenciação
* `%=` -> atribuição com resto de divisão
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
segue:

~~~js
    const a = `a`, b = `A`
    const condicao = a == b;

~~~
Operadores de comparação
~~~js
* `==` -> é igual
* `!=` -> não é igual         
* `>` -> maior que
* `<` -> menor que
* `>=` -> maior ou igual
* `<=` -> menor ou igual 
* `===`-> é estritamente igual (Valor E tipo)
* `!==`-> não é estritamente igual (Valor OU tipo)


~~~

## desafio 1.js

Escreva um código em JavaScript que resolva o problema descrito no livro
Logica da Programação de Programação I, pag.20 , em que o tema que obter 3 notas
de um aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou
para exame.Não é necessário ler as notas, você pode defini-las com variáveis.

Você precisará utilizar uma estrutura de decisão composta como a seguir:



~~~js
if (condicao) {
    // codigo da condicao//
}else if (condicao){
    // codigo da condição2
} else {
    // codigo se nenhuma das condições for verdadeira
}

~~~


## desafio2.js

Crie um programa que calcule o indice de Massa Corporal (IMC) de uma pessoa.

Orientações:

    * Utilize o método **prompt()** do objeto **window** para realizar a leitura dos dados de
    entrada.
    * Utilize a fórmula IMC=peso/altura2 para calcular o IMC.
    * Utilize a estrutura **if-else* para classificar o IMC de acordo com a tabela da OMS.

        IMC         Indicação

    Abaixo de 18,5  Abaixo do peso

    18,5 - 24,9     Peso normal

    25,0 - 29,9     Sobrepeso

    20,0 - 34,9     Obesidade grau I

    35,0 - 39,9     Obesidade grau II

    Acima de 40,0   Obesidade grau III

    Observações:
    O IMC é apenas uma medida geral e não leva emc consideração a composição corporal (músculos versus gordura)
    Pessoas com muita massa muscular podem ter um IMC alto, mesmo que não sejam obesas.É importante consultar um 
    médico ou nutricionista para uma avaliação individualizada. 

    Para mais informações: 

    Organização Mundial da Saúde (OMS):https://www.who.int/pt/about


## desafio3.js

Criar um converso de temperatura entre as escalas Celsius, Fahrenneit e Kelvin. O usuário
deve digita a temperatura e ser convertida,  e a escala de temperatura atual e a escala para o qual o valor deve ser convertido.

Entrada: valor atual da temperatura, escala atual da temperatura e a escala para exibição (conversão).

Saída (1): Valor convertido e  escala de conversão.

Fórmulas: 

De / Para / Fórmula 
--- | --- | ----
Celsius | Fahrenneit | TF = (TC * 9/5) + 32
Celsius |Kelvin | TK = TC + 273.15
Farhenneit |Celsius |TC = (TF - 32) * 5/9
Farhenneit | Kelvin | TK = (TF + 459.67) * 5/9
Kelvin | Celsius | TC = TK -  273.15
Kelvin | Farhenneit | TF = Tk * 9/5 - 459.67

## Problema adicional

Como executar dois "programas" na mesma página?

## desafio4.js

Desenvolva o programa do desafio 3 em uma página HTML, obtendo os dados a partir de um 
formulário e exibindo o resultado na mesma página.

* Utilize uma tag <input> para obter a temperatura;
* Utilize tags <select> para selecionar as escalas atual e de conversão;
* Utilize um botão para calcular a temperatura;
* Apresente o resultado logo abaixo do formulário. 
