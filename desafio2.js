let altura = 1.40;
let peso = 70;
let IMC = (peso / altura ** altura )

if (IMC >= 18.5){
    console.log(`ABAIXO DO PESO`);  
}
else if (IMC >= 18.5 || <= 24.9){
    console.log(`PESO NORMAL`);
}
else if (IMC = 25.0 || <= 29.9){
    console.log(`SOBREPESO`);
}


