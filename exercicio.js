// Exercicio 1. **Verificar maioridade:**
//     1. Peça ao usuário uma idade.
//     2. Use um `if-else` para verificar se ele é maior ou menor de idade.
// const nome1 = prompt("Digite seu nome: ")
// const idade1 = Number(prompt(`Ola ${nome1}, qual a sua idade: `))

// if (idade1 <= 17) {
//     alert(`${nome1}, voce e menor de idade`)    
// } else {
//     alert(`${nome1}, voce e maior de idade`)
// }

// Exercicio 2. **Verificar se um número é positivo ou negativo:**
//     - Peça ao usuário para inserir um número.
//     - Use um `if-else` para verificar se o número é positivo, negativo.
//     - OBS: *Por hora* considere o 0 como sendo um número negativo.
// const n2 = Number(prompt("Digite um numero:"))

// const tipo2 = Number.isNaN(n2) ? "invalido" : (n2 <= 0 ? "negativo" : "positivo");
// alert(`Numero ${tipo2}`);

// 3. **Aprovação em uma prova:**
//     - O usuário insere a nota de um aluno (0 a 100).
//     - Se a nota for maior ou igual a 60, exibir "Aprovado", senão "Reprovado".

// const aluno = prompt("Digite seu nome: ");
// const nota = Number(prompt("Digite sua nota: (0 a 100) "));

// const res = Number.isNaN(nota) ? "invalido" : (nota < 60 ? "Reprovado" : "Aprovado");
// alert(`${aluno} voce foi ${res}!!`);

// Exercicio 4. **Verificar se um número é positivo, negativo ou zero:**
//     - Peça ao usuário para inserir um número.
//     - Use um `if-else` para verificar se o número é positivo, negativo ou zero.

// const n4 = Number(prompt("Digite um numero:"))

// const tipo4 = Number.isNaN(n4) ? "invalido" : (n4 === 0 ? "0" : (n4 < 0 ? "negativo" : "positivo"));
// alert(`Numero ${tipo4}`);

// Exercicio 5. **Classificação de idade:**
//     - Peça ao usuário para inserir sua idade.
//     - Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).
// const nome5 = prompt("Digite seu nome: ")
// const idade5 = Number(prompt(`Ola ${nome5}, qual a sua idade: `))

// if (idade5 <= 12 && idade5 > 0) {
//     alert(`${nome5}, voce e uma crianca`)
// }
// else if (idade5 <= 17) {
//     alert(`${nome5}, voce e um adolecente`)
// } else {
//     alert(`${nome5}, voce e adulto`)
// }

// Exercicio 6. **Verificar se um número é par ou ímpar:**
//     - Peça ao usuário para inserir um número.
//     - Use o operador `%` para verificar se o número é divisível por 2.
// const n6 = Number(prompt("Digite um numero:"));
// const tipo6 = Number.isNaN(n6) ? "invalido" : (n6 % 2 === 0 ? "par" : "impar");
// alert(`Numero ${tipo6}`);

// ### **Nível Intermediário**

// 1. **Calculadora simples:**
//     - Peça dois números e uma operação (`+`, `-`, `*`, `/`).
//     - Use um `if-else` para calcular o resultado e exibi-lo.
// const num1 = Number(prompt("Digite um numero:"));
// const num2 = Number(prompt("Digite outro numero:"));
// const operador = prompt("Escolha +, -, * ou / para operacao desejada: ")

// if (operador === "+") {
//     alert(`${num1} + ${num2} = ${num1 + num2}`);    
// }
// else if (operador === "-") {
//     alert(`${num1} - ${num2} = ${num1 - num2}`);
// }
// else if (operador === "*") {
//     alert(`${num1} * ${num2} = ${num1 * num2}`);
// }
// else if (operador === "/" && num2 == 0) {
//     alert(`Nao e possivel a divisao`);
// }
// else {
//     alert(`${num1} / ${num2} = ${num1 / num2}`);
// }

// 2. **Maior entre três números:**
//     - O usuário insere três números.
//     - Use `if-else` para determinar e exibir o maior.
// const num2 = Number(prompt("Digite um numero:"));
// const num3 = Number(prompt("Digite outro numero:"));
// const num4 = Number(prompt("Digite outro numero:"));
// if ((num2 > num3) && (num2 > num4)) {
//     alert(`O maior numero e ${num2}`)
// }
// else if (num3 > num4){
//     alert(`O maior numero e ${num3}`)
// } 
// else {
//     alert(`O maior numero e ${num4}`)
// }

// 3. **Desconto em compras:**
// - Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
// - Caso contrário, exiba o valor normal.

// const preco = Number(prompt("Qual o valor do produto em R$: "))
// if (preco > 100) {
//     const precodes = preco * 0.9
//     alert(`Total a pagar com 10% de desconto e R$ ${precodes.toFixed(2)}`)
// }
// else {
//     alert(`O total e R$ ${preco.toFixed(2)}`)
// }

// 4. **Sistema de login simples:**
//     - O usuário insere um nome de usuário e senha.
//     - Se `usuario == "admin"` e `senha == "1234"`, exibir "Login bem-sucedido", caso contrário "Acesso negado".

// const usuario = prompt("Digite o seu usuario: ").toLowerCase();
// const password = Number(prompt("Digite sua senha numerica:"));

// if ((usuario === "admin") && password === 1234) {
//     alert(`Bem vindo ${usuario}!`)
// } else {
//     alert(`Acesso negado, usuario ou senha invalidos`);
// }

// 1. **Classificação de triângulos:**
//     - O usuário insere três lados.
//     - Verifique se forma um triângulo e classifique como equilátero, isósceles ou escaleno.
// const lado1 = Number(prompt("Insira o primeiro lado do triangulo: "))
// const lado2 = Number(prompt("Insira o segundo lado do triangulo: "))
// const lado3 = Number(prompt("Insira o terceiro lado do triangulo: "))

// if ((lado1 === lado2) & (lado2 === lado3)) {
//     alert(`O triangulo e' equilatero`);
// }
// else if (((lado1 === lado2) & (lado2 != lado3)) || ((lado2 === lado3) & (lado1 != lado3)) || ((lado1 === lado3) & (lado1 != lado2))) {
//     alert(`O triangulo e' isosceles`);
// }
// else {
//     alert(`O triangulo e' escaleno`);
// }

// 2. **Conversão de notas para conceitos:**
//     - O usuário insere uma nota (0-100).
//     - Converta para conceitos:
//     - `A` (90-100), `B` (80-89), `C` (70-79), `D` (60-69), `F` (<60).

// const aluno = prompt("Digite seu nome: ");
// const nota = Number(prompt("Digite sua nota: (0 a 100) "));

// if (nota >= 90) {
//     alert(`${aluno} sua nota foi A!!`);
// }
// else if (nota >= 80) {
//     alert(`${aluno} sua nota foi B!!`);
// }
// else if (nota >= 70) {
//     alert(`${aluno} sua nota foi C!!`);
// }
// else if (nota >= 60) {
//     alert(`${aluno} sua nota foi D!!`);
// }
// else {
//     alert(`${aluno} sua nota foi F!!`);
// }

// 3. **Cálculo de IMC:**
//     - Peça peso e altura.
//     - Calcule o IMC e classifique como abaixo do peso, normal, sobrepeso ou obesidade.

// const nome = prompt("Digite seu nome: ");
// const peso = Number(prompt("Digite seu peso (kg): "));
// const altura = Number(prompt("Digite sua altura (m): "));
// //processamento
// const imc = peso / (altura ** 2);
// //saida
// if (imc < 18) {
//     alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta abaixo do peso`);
// }
// else if (imc < 24.9) {
//     alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta normal`);
// }
// else if (imc < 29.9) {
//     alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta com sobrepeso`);
// }
// else if (imc < 34.9) {
//     alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta obeso`);
// }
// else {
//     alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta muito obeso`);
// }

// 4. **Validação de ano bissexto:**
//     - Peça um ano e verifique se é bissexto.
//     - Um ano é bissexto se for divisível por 4, mas não por 100, exceto se for divisível por 400.
const ano = Number(prompt("Informe um ano: "));
if (Number.isNaN(ano)) {
    alert(`Valor invalido`);
} 
else if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    alert(`Ano bissexto`);
}
else {
    alert(`Nao e bissexto`);
}
    
