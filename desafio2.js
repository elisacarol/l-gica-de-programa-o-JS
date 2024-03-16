const peso = window.prompt(`Qual o seu peso?`);
const altura = window.prompt(`Qual a sua altura?`);
const IMC = (peso / altura ** altura);

    if (IMC <=18.5){
        console.log(`ABAIXO DO PESO`, IMC);  
    }
    else if (IMC >=18.5 <= 24.90){
        console.log(`PESO NORMAL`, IMC);
    }
    else if (IMC =25.0 <=29.9){node 
        console.log(`SOBREPESO`, IMC);
    }
    else if (IMC =30 <=34.9){
        console.log(`OBESIDADE GRAU`,IMC);
    }
    else if (IMC = 35.0 <= 39.9){
        console.log(`OBESIDADE GRAU II`, IMC);
    }
    else if (IMC < 40.0){
        console.log(`OBESIDADE GRAU III`, IMC);
    }
    
    

