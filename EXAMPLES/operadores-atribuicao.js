let numero = 10;/*usa-se let porque serão mudadas a atribuição, somente let*/

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