//IMC
// Entrada
//Exercicio 1 e 2

// const nome = prompt("Digite seu nome: ");
// const peso = Number(prompt("Digite seu peso (kg): "));
// const altura = Number(prompt("Digite sua altura (m): "));
// //processamento
// const imc = peso / (altura ** 2);
// //saida
// if (imc < 18) {
//     alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta muito magro`)
// }
// else if (imc < 24.9) {
//     alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta saudavel`)
// }
// else if (imc < 29.9) {
//     alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta com sobrepeso`)
// }
// else if (imc < 34.9) {
//     alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta obeso`)
// }
// else
//     alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta muito gordo`)

// Exercicio 3
//Entrada soma de 2 numeros
// const a = Number(prompt("Digite o primeiro numero: "));
// const b = Number(prompt("Digite o segundo numero: "));
// //Processamento
// const soma = a + b;
// //saida console.log voce precisa abrir o inspecionar / console, com alert ele traz o resultado em uma caixa flutuante
// console.log(`A soma de ${a} + ${b} e ${soma}!`);
// alert(`A soma de ${a} + ${b} e ${soma}!`);

// Exercicio 4
// Entrada convertendo cm em in
// const a = Number(prompt("Digite o valor em centimetros: "));
// //Processamento
// const convertendo = a / 2.54;
// //saida console.log voce precisa abrir o inspecionar / console, com alert ele traz o resultado em uma caixa flutuante
// if (convertendo == 1) {
//     alert(`${a}cm e ${convertendo} polegada`);
// }
// else
//     alert(`${a}cm sao ${convertendo.toFixed(2)} polegadas`);

//Exercicio 5 convertendo a idade em meses/dias/horas e minutos

// const nome = prompt("Qual seu nome? ");
// const idade = Number(prompt(`Ola ${nome}, qual a sua idade? `));

// const meses = idade * 12;
// const dias = idade * 365;
// const horas = dias * 24;
// const minutos = horas * 60;

// alert(`Nossa ${nome}!! Voce voce ja viveu ${meses} meses, que sao ${dias} dias, que sao ${horas} horas, que sao ${minutos} minutos `);

//Exercicio 6 media aritimetica

// const aluno = prompt("Digite seu nome: ");
// const n1 = Number(prompt("Digite sua primeira nota: "));
// const n2 = Number(prompt("Digite sua segunda nota: "));
// const n3 = Number(prompt("Digite sua terceira nota: "));

// const media = (n1 + n2 + n3) / 3;

// if (media < 5) {
//     alert(`${aluno} sua media foi ${media.toFixed(1)}, voce precisa estar mais!!`);    
// }
// else if (media < 9) {
//     alert(`${aluno} sua media foi ${media.toFixed(1)}, muito bem voce passou!!`);
// }
// else
//     alert(`${aluno} sua media foi ${media.toFixed(1)}, voce esta de parabens!!`);

//Exercicio 7 convertendo R$ para $

// const br = prompt("Quanto voce tem no bolso? (use virgula) ");
// const cotusd = Number(prompt("Qual a cotacao do dolar? "));
// // trocando a , pelo .
// const brt = Number(br.replace(",", "."));
// const usd = brt / cotusd

// alert(`Voce tem apenas $${usd.toFixed(2)}`)

// Exercicio 8 convertendo hh:mm:ss em segundos usando o split
// const tempo = prompt("Digite o tempo (hh:mm:ss)");

// const [hh, mm, ss] = tempo.split(":").map(Number);
// const total = (hh * 3600) + (mm * 60) + ss;

// alert(`O tempo de ${tempo} em segundos da ${total}`);

//Condicionais if else
// const temp = Number(prompt("Digite a temperatura em C "))

// if (Number.isNaN(temp)) {
//     alert(`Valor invalido`)
// }
// else if (temp < 0) {
//     alert(`Esta muito frio`)
// }
// else if (temp < 20) {
//     alert(`Esta frio`)
// }
// else if (temp < 30) {
//     alert(`Esta agradavel`)
// }
// else {
//     alert(`Esta quente`)
// }

// Outras condicoes || ou, && e, 

// const dinheiro = Number(prompt("Tem quanto na carteira? "))
// const temCartao = prompt("Tem cartao? (S/N)").toUpperCase()

// if ((dinheiro >= 10 || temCartao == "S") && dinheiro >= 0) {
//     alert(`Voce consegue compra o lanche!`)
// } else {
//     alert(`Nao vai rolar`)
// }

// const logado = true;
// if (!logado) {
//     alert(`Faca o login`)    
// }

//Operador ternario ? (if) :(else)
// const n = Number(prompt("Digite um numero:"));
// const tipo = Number.isNaN(n) ? "invalido" : (n % 2 === 0 ? "par" : "impar");
// alert(`Numero ${tipo}`);


// switch case

// const dia = prompt("Dia da semana (seg, ter, qua, ...)");

// switch (dia) {
//     case "seg":
//     case "ter":
//     case "qua":
//     case "qui":
//     case "sex":
//         alert(`Dia util, bora trabalhar!!`)        
//         break;
//     case "sab":
//     case "dom":
//         alert(`Final de semana, bora curtir!!`)
//         break;
//     default:
//         alert(`Seu burro, digita direito!!`);
// }

//Exercicio Login para usuario "admin" ou "gerente" senha "1234"

// const usuario = prompt("Digite o seu usuario: ").toLowerCase();
// const password = Number(prompt("Digite sua senha numerica:"));

// if ((usuario === "admin" || usuario === "gerente") && password === 1234) {
//     alert(`Bem vindo ${usuario}!`)
// } else {
//     alert(`Acesso negado, usuario ou senha invalidos`);
// }

//Exercicio classificacao de numero positivo, negativo ou 0
// const n = Number(prompt("Digite um numero:"))

// const tipo = Number.isNaN(n) ? "invalido" : (n === 0 ? "0" : (n < 0 ? "negativo" : "positivo"));
// alert(`Numero ${tipo}`);

//Exercicio de verificacao de senha "javascript123"

// const user = prompt("Digite seu nome: ")
// const password = prompt("Digite a senha: ")
// const passRight = "javascript123"
// const npuser = (password.length) // talvez nao funcionou
// const npRight = (passRight.length)

// if (npRight === npuser && password === passRight) {
//         alert(`Bem vindo ${user}`)    
// } else {
//     alert(`Tem algo errado nessa senha`)
// }

// const n1 = Number(prompt("Digite um numero: "))
// const n2 = Number(prompt("Digite outro numero: "))
// const operador = prompt("Escolha +, -, * ou / para operacao desejada: ")

// if (Number.isNaN(n1) || Number.isNaN(n2)) {
//     alert(`Valor invalido`)
// } else{

//     switch (operador) {
//         case "+":
//             alert(`${n1} + ${n2} = ${n1 + n2}`);
//             break;
//         case "-":
//             alert(`${n1} - ${n2} = ${n1 - n2}`);
//             break;
//         case "*":
//             alert(`${n1} * ${n2} = ${n1 * n2}`);
//             break;
//         case "/":
//             if (n2 == 0) {
//                 alert(`Nao e possivel dividir por 0`);
//             } else {
//                 alert(`${n1} / ${n2} = ${n1 / n2}`) ;
//             }
                
//             break;

//         default:
//             if (operador != "+" || operador != "-" || operador != "*" || operador != "/") {
//                 alert(`Operacao invalida!`)            
//             }
//             break;
//     }
// }

// Estrutura de Repeticao
// while
// let i = 1
// while (i <= 5) {
//     console.log("Numero:", i)
//     i++
// }

// do...while
// let senha;
// do {
//     senha = prompt("Digite sua senha: ")
// } while (senha !== "1234");
// alert(`Acesso liberado!`)

// for
// estrutura: (inicio; condicao; encremento)
// for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
// }

//for...of
// const frutas = ["Maca", "Banana", "Laranja", "Pera"];
// for (const fruta of frutas) {
//     console.log("Fruta:", fruta)
// }

//for...in
// const pessoa = {nome: "Wilson", idade: 49, cidade: "Sao Paulo"};
// for (const chave in pessoa) {
//     console.log(`${chave}: ${pessoa[chave]}`)
// }

//forEach
// const numeros = [1,2,3,4,5,6,7,8,9,10];

// numeros.forEach(function(n) {
//     console.log(`7 x ${n} = ${7 * n}`)
// });
//e' a mesma funcao, porem redusida
// numeros.forEach(n => console.log(`7 x ${n} = ${7 * n}`))


// 1 Mostrar os numeros de 1 a 10 com while
// let a = 1
// while (a <= 10) {
//     console.log(`${a}`)
//     a++
// }

// 2 Mostrar a tabuada do 5 com o for
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// 3 somar os numeros de 1 a 100 com o for
// soma = 0
// for (let i = 1; i <= 100; i++) {
//     soma += i
// }
// console.log(`A soma de 1 a 100 e': ${soma}`)

// 4 A media de 5 numeros
// let media = 0
// for (let i = 1; i <= 5; i++) {
//     const a = Number(prompt(`Digite o ${i} numero:` ));
//     media += a
// }
// alert(`A media e' ${media / 5}`)

// Ler nomes ate digitar sair.
// let nome;
// do {
//     nome = prompt("Digite seu nome ou sair para encerrar: ").toUpperCase();
//     if (nome !== "SAIR") {
//         alert(`Voce digitou: ${nome}`)
//     }
// } while (nome !== "SAIR");
// alert(`Ate' mais!!`)


// Math
console.log(Math.PI)

console.log(Math.floor(4.9));
console.log(Math.ceil(4.9));
console.log(Math.round(4.9));

console.log(Math.pow(2, 3));

console.log(Math.sqrt(16));

console.log(Math.min(4,9,8,7,6,10,15,1,8,12));
console.log(Math.max(4,9,8,7,6,10,15,1,8,12));


