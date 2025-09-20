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
const num2 = Number(prompt("Digite um numero:"));
const num3 = Number(prompt("Digite outro numero:"));
const num4 = Number(prompt("Digite outro numero:"));
if ((num2 > num3) && (num2 > num4)) {
    alert(`O maior numero e ${num2}`)
}
else if ((num3 > num2) && (num3 > num4)){
    alert(`O maior numero e ${num2}`)
} 
else if ((num4 > num2) && (num4 > num3)){
    alert(`O maior numero e ${num4}`)
}// Rsrsr Esse nao funcionou
