// 1. **Contagem de 1 a 10:**
//     - Use um `for` para exibir os números de 1 a 10 no console.

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}`);
// }

// 2. **Tabuada de um número:**
//     - Peça um número ao usuário.
//     - Exiba a tabuada desse número de 1 a 10 usando um `for`.
// const a = Number(prompt("Informe a tabuada: "));
// if (Number.isNaN(a)) {
//     alert(`Valor invalido`);
// }
// else {
//     for (let i = 1; i <= 10; i++) {
//     console.log(`${a} x ${i} = ${a * i}`);
//     }
// }

// - Peça um número `N` ao usuário.
// - Use um `while` ou `for` para somar os números de `1` até `N`.
// - Exemplo:
//     - Se um usuário inserir o número 4, o código deverá fazer a soma do 1, 2, 3 e 4 totalizando **10**.
// soma = 0
// const a = Number(prompt("Informe um numero: "));

// if (Number.isNaN(a)) {
//     alert(`Valor invalido`)
// } 
// else {
//     for (let i = 1; i <= a; i++) {
//         soma += i;
//     }
// }
// alert(`A soma de 1 a ${a} e': ${soma}`)

// 1. **Exibir os números pares de 1 a 50:**
//     - Use um `for` ou `while` para exibir apenas os números pares de `1` a `50`.

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i}`);
//     }
// }

// 2. **Jogo de adivinhação:**
    // - Gere um número aleatório de 1 a 100.
    // - Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
    // - Informe se o número inserido é maior ou menor que o correto.

// const a = Math.floor(Math.random() * 101);
// console.log(`${a.toFixed(0)}`)
// let resp;
// while (resp !== a) {
//     alert(a)
//     resp = Number(prompt("Adivinhe o numero"));
//     if (resp > a) {
//         alert("tente um numero menor") 
//     } else if (resp < a) {
//         alert("tente um numero maior")
//     } else {
//         alert("Voce acertou")
//     }
// }

// 3. **Contagem regressiva:**
//     - Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um `while`.
// let a = Number(prompt("Digite um numero: "))

// while (a > 0) {
//     a -= 1;
//     console.log(`${a}`);
// }

// 1. **Soma dos dígitos de um número:**
//     - Peça ao usuário um número inteiro positivo.
//     - Use um `while` para somar seus dígitos.
// let a = Number(prompt("Digite um numero: "))
// soma = 0
// while (a > 0) {
//     let digito = a % 10;
//     soma += digito;
//     a = Math.floor(a /10);

// }
// alert(`A soma ${soma}`)

// 2. **Fatorial de um número:**
//     - Peça um número ao usuário.
//     - Use um `for` ou `while` para calcular o fatorial desse número.
// let a = Number(prompt("Digite um numero: "))
// soma = 1
// while (a > 0) {
//     soma = (soma * a)
//     a -= 1;
// }
// console.log(`${soma}`);

// 3. **Inverter um número:**
//     - Peça um número ao usuário.
//     - Use um `while` para inverter seus dígitos (exemplo: `123` → `321`).

// let a = Number(prompt("Digite um numero: "))
// let b = 0;
// while (a > 0) {
//     let digito = a % 10;
//     b = b * 10 + digito;
//     a = Math.floor(a /10);

// }
// alert(`A soma ${b}`)


// 4. **Números perfeitos de 1 a 1000:**
//     - Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.
//     - Exemplo: `6` → `1 + 2 + 3 = 6`.
//     - Use um `for` aninhado para encontrar e exibir esses números até `1000`.

for (let num = 1; num <= 1000; num++) {
    let soma = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            soma += i;
        }
    }
    
    if (soma === num) {
    console.log(num + ` numero perfeito`);
    } 
}
