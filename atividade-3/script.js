const idade = document.getElementById('idade');
const btnVerificar = document.getElementById('btnVerificar');
const resultadoDiv = document.getElementById('resultado');  


function verificarIdade() {
    const idade = parseInt(idade.value);
    if (isNaN(idade)) {
        exibirMensagem("<p style='color: red;'> Por favor, digite uma idade válida!</p>", "reprovado");
        return;
    }    
}