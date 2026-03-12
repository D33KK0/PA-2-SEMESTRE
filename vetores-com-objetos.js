// Exemplo com vetor de nomes
const ListaDeNomes = ["André", "Ana", "João"]

// Exemplo com vetor de números
const ListaDeNumeros = [1, 2, 3, 4, 5]

//Vetor de objetos com dados de nome e idade 
//Um Objeto carrega dados como uma classe
const ListaDeUsuarios = [
    {nome: "André", idade: 25},
    {nome: "Ana", idade: 56},
    {nome: "João", idade: 32},
    {nome: "José", idade: 15}
]

// Percorrendo e exibindo os elementos do vetor
// ForEach é uma função com laços de repetição
console.log("Exibindo todos os usuários de vetor.")
ListaDeUsuarios.forEach( usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})

for (let i = 0; i < ListaDeUsuarios.length; i++) {
    console.log(`${ListaDeUsuarios[i].nome} tem ${ListaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = ListaDeUsuarios.filter(usuario => usuario.idade >= 18)
// Use as {} caso precise de mais de uma linha.
// Neste caso não precisa, por isso não vamos usar.
maioridade.forEach( usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
}
)

console.log("\nFiltrando menos de 18 anos.")
const menoridade = ListaDeUsuarios.filter(usuario => usuario.idade < 18)
menoridade.forEach(usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
}
)

console.log("\nFiltrando menores de 18 anos.")

console.log("\nNa lista de números, filtre e mostre apenas numeros pares.")

console.log("\nNa lista de nome, mostre trodos os nomes com ForEach.")

console.log("\nNa de usuários, mostre apenas os nomes.")

const usuarioEncontrado = ListaDeUsuarios.find(usuario => usuario.nome === "Ana");

console.log(`Nome: ${usuarioEncontrado.nome}`);
console.log(`Idade: ${usuarioEncontrado.idade}`);

console.log("\nNa lista de usuários, encontre um usuário com idade de 45 anos.")
const maiorde45 = ListaDeUsuarios.filter(usuario => usuario.idade === 45)

console.log("Mostrando a some de todas as idades.")
const somaIdade = ListaDeUsuarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(somaIdade)