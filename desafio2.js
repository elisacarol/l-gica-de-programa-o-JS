function calcule IMC () {

    const peso = window.prompt(`Digite seu peso:`);
const altura = window.prompt(`Digite sua altura:`);
const imc = peso / altura ** 2;

    if (imc < 18.5){
        window.alert(`IMC: ${imc.toFixed(1)} --> Abaixo do Peso`);  
    }

    else if (imc < 25){                                           // QUANDO TRABALHAR COM FAIXAS PRECISA VERIFICAR A INCLUSÃO//
        window.alert(`IMC: ${imc.toFixed(1)} --> Peso normal`);   // PORQUE O LIMITE INFERIOR PRECISA SER " PELO MENOS IGUAL"//
    }                                                               // ARREDONDAR PARA 25.0 AUXILIA NO ARREDONDAMENTO CASO SEJA   
   
    else if (imc < 30){                                            // 24.91 ATÉ 24.999999//     
        window.alert(`IMC: ${imc.toFixed(1)} --> Sobrepeso`);
    }
    
    else if (imc < 35){                                      
        window.alert(`IMC: ${imc.toFixed(1)} --> Obesidade grau I`);
    }
    
    else if (imc < 40){                                             // no último nao colocar o ELSE IF//
        window.alert(`IMC: ${imc.toFixed(1)}  --> Obesidade grau II`);
    }

    else {
        window.alert(`ÌMC: ${imc.toFixed(1)}  --> Obesidade grau III`);
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