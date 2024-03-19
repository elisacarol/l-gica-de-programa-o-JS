
const temperatura_atual = parsefloat(window.prompt(`Digite a temperatura atual:`)); 
const cala_temperatura_atual = parsefloat(window.prompt (`Digite a escala temperatura atual:`));
const conversao_escala = parsefloat(window.prompt (`Converter para qual escala?`));
const escala_temperatura = celsius, fahrenheit, kelvin;

if (`escala_temperatura_atual = celsius`){
    conversao (`conversao_escala_Fahrenheit ${(celsius * 9/5) + 32} && 
    conversao_escala_Kelvin ${celsius - 273.15}`);
}

else if (`escala_temperatura_atual = fahrenheit`){
    conversao (`conversao_escala Celsius: ${(fahrenheit - 32) * 5/9} && 
    conversao_escala_Kelvin: ${(fahrenheit + 459.67) * 5/9}`);
}

else(`escala_temperatura_atual = kelvin`){
    conversao (`conversao_escala celsius: ${(kelvin - 273.15} && 
    conversao_escala_fahrenheit: ${(kelvin * 9/5) - 459.67}`); 
}

window.alert(`A temperatura convertida é ${conversao_escala});



//escala TC_TF = (TC * 9/5) + 32;
//escala TC_TK = (TC - 273.15);
//escala TF_TC = (TF -32) * 5/9;
//escala TF_TK = (TF + 459.67)*5/9
//escala TK_TC = (TK -273.15)
//escala TK_TF = (TK*9/5-459.67)

 


