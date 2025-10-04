// Básicos
// 1. Adicione um sufixo às palavras
// Dado um array de palavras, use map para adicionar o sufixo "!!!"; a cada
// uma.

const words = ["Dia", "Noite", "Legal", "Chato"];

const sufixo = words.map((a => a + "!!!"));
console.log(sufixo);

// 2.Adicione o prefixo “Colaborador: “ às palavras
// Dado um array de nomes, use map para adicionar o prefixo
// "Colaborador: " antes de cada nome.

const prefixo = words.map((a => "Colaborador: " + a));
console.log(prefixo);

// Intermediários (Aplicações Práticas)
// 3. Extraindo nomes de objetos
// Dado um array de objetos representando pessoas, crie um novo array
// contendo apenas os nomes.

const people = [
    {nome: "Wilson", age: 49},
    {nome: "Elisandra", age: 50},
    {nome: "Gabriel", age: 26},
    {nome: "Beatriz", age: 19},
    {nome: "Tiago", age: 14},
];

const names = people.map((name => name.nome));
console.log(names);

// 4. Calculando áreas de círculos
// Você tem um array de raios e precisa calcular as áreas dos círculos
// correspondentes.
// Fórmula: Área = π * r²
const raios = [5, 10, 15, 18, 12, 9];
const area = raios.map((a => Math.PI * Math.pow(a, 2) ));
console.log(area)

// 5. Formatando preços
// Você tem um array de preços em reais e deseja formatá-los como string
// no formato R$ xx,xx.

const produtos = [
    {nome: "Arroz", preco: 49},
    {nome: "Feijao", preco: 50},
    {nome: "Oleo", preco: 26},
    {nome: "Cafe", preco: 19},
    {nome: "acucar", preco: 14},
];
const precos = produtos.map((reais => "R$" + reais.preco.toFixed(2).toString()));
console.log(precos);

// 6. Transformando notas escolares
// Dado um array de notas de alunos (0 a 100), converta cada nota em um
// conceito (A, B, C, D, F).

const aluno = [
    {nome: "Wilson", nota: 49},
    {nome: "Elisandra", nota: 78},
    {nome: "Gabriel", nota: 86},
    {nome: "Beatriz", nota: 61},
    {nome: "Tiago", nota: 94},
];

const nomes = aluno.map(n => {
    let conceito;
    if(n.nota >= 90) conceito = 'A';
    else if(n.nota >= 80) conceito = 'B';
    else if(n.nota >= 70) conceito = 'C';
    else if(n.nota >= 60) conceito = 'D';
    else conceito = 'E';

    return `${n.nome} tirou nota ${n.nota} e ficou com conceito ${conceito}`;
});
console.log(nomes)
