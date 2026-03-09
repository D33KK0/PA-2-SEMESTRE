// Vetores
const ListaDeNomes = ["Marta", "José", "Maria"]

console.log("Exibindo todos os elementos: ")
console.log(ListaDeNomes)

console.log("\nExibindo apenas o primeiro elementos: ")
console.log(ListaDeNomes[0])

console.log("\nAdicionando um elemento: ")
ListaDeNomes.push("Marilia")
console.log(ListaDeNomes)

console.log("\nRemovendo um elemento: ")
// A partir do índice 2, eliminar 1 elemento
ListaDeNomes.splice(2,1)
console.log(ListaDeNomes)

console.log("\nRemovendo o 2° elemento da lista: ")
ListaDeNomes.splice(1,1)
console.log(ListaDeNomes)

console.log("\nRemovendo removendo apenas o ultimo elemento da lista: ")
ListaDeNomes.pop()
console.log(ListaDeNomes)

console.log("\nRemovendo o 2° elemento da lista: ")
ListaDeNomes.SHI(1,1)
console.log(ListaDeNomes)

