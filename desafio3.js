 function converteTemperatura (temperaturaAtual, escalaAtual, escalaConversao){ //transformar esta funçao para converter a temperatura e passaremos os dados para ela
                                                                                //virará um parametro
    
     //a const anterior foi cancelada porque o CONVERTETEMPERATURA CONVERTERÁ 
     
    let temperaturaConvertida, msgErro = 'OK';

     if (!isNaN (temperaturaAtual)) { //se não é não 
     
         escalaAtual = escalaAtual.toUpperCase();
         escalaConversao = escalaConversao.toUpperCase(;)
     
     if (escalaAtual === 'C') {
     
         if (escalaConversao === 'K') { 
             temperaturaConvertida = temperaturaAtual + 273.15;
     
         } else if (escalaConversao === 'F'){
             temperaturaConvetida = (temperaturaAtual * 9 / 5) + 32;
         
         } else if (escalaConversao === 'C'){
             msgErro ='ERRO: Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
     
         } else {
             msgErro ='ERRO: Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`);
     
         }
      
     } else if (escalaAtual === 'F') {
     
         if (escalaConversao === 'K') {
             temperaturaConvertida = (temperaturaAtual + 459.67) * 5 / 9};
             
         } else if (escalaConversao === 'C') {
             temperaturaConvertida = (temperaturaAtual - 32) * 5 / 9;
                 
         } else if (escalaConversao === 'F'){
             window.alert(`Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
             
         } else {
             window.alert(`Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`);
         
    }   
     
     } else if (escalaAtual === 'K') {
     
         if (escalaConversao === 'C') {
            temperaturaConvertida = temperaturaAtual - 273.15;
             
         } else if (escalaConversao === 'F') {
            temperaturaConvertida  = temperaturaAtual * 5 / 9 - 459.67};
                 
         } else if (escalaConversao === 'K'){
             window.alert(`Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
             
         } else {
             window.alert(`Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`);
         
         }
     
     } else {
             msgERRO = `ERRO: A escala ATUAL selecionada: ${escalaAtual}. A escala`;
     
     }
     
     } else {
             msgErro = 'ERRO: O número digitado para conversão não é  um número válido.';
     }


     // retornando em JASON - JavaScript Object Notation - retornando o objeto em JASON
     
    return { 
        temperaturaAtual: temperaturaAtual,
        escalaAtual: escalaAtual,
        escalaConversao: escalaConversao,
        temperaturaConvertida: temperaturaConvertida,
        msgErro: msgErro
    ]

    // ARRAY - LISTA DE INFORMAÇÕES CONJUNTO DE DADOS USA-SE {} PARA INFORMAÇÕES SEPARADAS