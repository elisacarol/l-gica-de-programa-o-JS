# Desafios

1. Reescreva os programas "Calculo IMC" e "Conversor de Temperatura " para serem 
executados na própria página HTML.

# Exercícios

## 1. Tipo de um triângulo

Escreva um programa que leia as medidas dos lados de um triângulo e escreva
sua classificação de acordo com o tamanho dos seus ladoS: 

* Equilátero: todos os lados tem o mesmo tamanho
* Isóceles: dois lados tem o mesmo tamanho, mas o terceiro lado é diferente
* Escaleno: os três lados do triângulo tem tamanhos diferentes

Observação: é preciso verificar se os lados informados são realmente de um 
triângulo, ou seja, se a forma pode ser "fechada".  Para isso, a forma
deve atender à seguinte condição:

~~~js
ladoA < (ladoB + LadoC)
ladoB < (ladoA + ladoC)
ladoC < (ladoA + ladoB)
~~~


