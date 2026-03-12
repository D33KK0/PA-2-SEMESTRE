const ListaDeUsuarios = [
    {nome: "Ana", nota: 5.0},
    {nome: "Bruno", nota: 10.0},
    {nome: "Carla", nota: 2.0},
    {nome: "Andrea", nota: 7.0},
    {nome: "Marta", nota: 6.0}
]

console.log("Encontre a aluna marta e mostre o nome e a média dela.")
const aluna = ListaDeUsuarios.find(usuario => usuario.nome === "Marta" );
console.log(`Nome: ${aluna.nome}`);
console.log(`Média: ${aluna.nota}`);
//
console.log("Mostre a média geral da turma.")
const somaNotas = ListaDeUsuarios.reduce((total, usuario) => total + usuario.nota, 0)
const Media = somaNotas/ListaDeUsuarios.length;
console.log(`Média geral: ${Media})
//
console.log("Mostre o nome e a nota dos alunos com nota abaixo de 7.0.")


console.log("Mostre apenas o nome dos alunos com nota maior ou igual a 7.0.")