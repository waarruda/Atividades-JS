//IMC
// Entrada
const nome = prompt("Digite seu nome: ");
const peso = Number(prompt("Digite seu peso (kg): "));
const altura = Number(prompt("Digite sua altura (m): "));
//processamento
const imc = peso / (altura ** 2);
//saida
if (imc < 18) {
    alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta muito magro`)
}
else if (imc < 24.9) {
    alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta saudavel`)
}
else if (imc < 29.9) {
    alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta sobrepeso`)
}
else if (imc < 34.9) {
    alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta obeso`)
}
else
    alert(`Ola ${nome}, seu IMC e: ${imc.toFixed(2)}, voce esta muito gordo`)