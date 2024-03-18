const peso = window.prompt(`Qual o seu peso?`);
const altura = window.prompt(`Qual a sua altura?`);
const IMC = (peso / altura ** altura);

    if (IMC <=18.5){
        console.log(`ABAIXO DO PESO`, IMC);  
    }
    else if (IMC >=18.5 <= 24.90){ // QUANDO TRABALHAR COM FAIXAS PRECISA VERIFICAR A INCLUSÃO//
        console.log(`PESO NORMAL`, IMC); // PORQUE O LIMITE INFERIOR PRECISA SER " PELO MENOS IGUAL"//
    }                                    // ARREDONDAR PARA 25.0 AUXILIA NO ARREDONDAMENTO CASO SEJA   
    else if (IMC =25.0 <=29.9){          // 24.91 ATÉ 24.999999//     
        console.log(`SOBREPESO`, IMC);
    }
    else if (IMC =30 <=34.9){
        console.log(`OBESIDADE GRAU`,IMC);
    }
    else if (IMC = 35.0 <= 39.9){
        console.log(`OBESIDADE GRAU II`, IMC);
    }
    else  (IMC < 40.0){ // no último nao colocar o ELSE IF//
        console.log(`OBESIDADE GRAU III`, IMC);
    }
    
 
//const altura=1.79;
//const peso= 7
//imc = peso / altura ** altura; OU (peso/ altura ** 2)
//
//if (imc > 18.5) OBS : Se colocar apenas o IF ele vai executar cada um sem dependencia)
//  console.log(`imc: ${imc}.toFixed --> Abaixo do peso`);

//if (imc > 18.5 && imc < 24.9){
//  console.log(`IMC:${imc}.toFixed --> Peso normal`);
//
//else if (imc >= 25.0 && imc < 30.0){
//  console.log(`IMC: ${imc}.toFixed --> Sobrepeso`);
//
//else if (imc >= 30.0 && imc < 35.0){
//  console.log(`IMC: $)



//EXEMPLO COM ELSE IF:
// OBS.: TODOS OS LIMITES INFERIORES VAO TESTAR UMA LOGICA ANTERIOR QUE É FALSA //
// ELSE IF SERVEM PARA TESTAR (VER A FOTO) PODEMOS PARTIR DO PRINCIPIO QUE ELA É FALS//
// NA CONDIÇÃO ATUAL. RACIOCINIO - EXEMPLO: SE NÃO É --> 18.5  < ENTÃO É 18.5 >=//
//
// OUTRO MODELO DE ATRIBUIÇÃO:

//COMO ARMAZENAR UM VALOR QUE USAREI DEPOIS? COMO ARMAZENAR O VALOR:
//PARA MOSTRAR O RESULTADO NA TELA SUBSTITUIR "CONSOLE" POR "WINDOW.ALERT".
//