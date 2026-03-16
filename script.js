function gerarTabuada(){
    const numeroInput = document.getElementById("NumeroImput: ");
    let numero = parseInt(numeroInput.value);

    // Obtendo o número do input no HTML
    const resultadoDiv = document.getElementById('ResultadoTabuada')
    resultadoDiv.innerHTML = "";

    // Verificar se a entrada é um numero valido 
    if (isNaN(numero) || numero === null || numero === "") {
        resultadoDiv.innerHTML = `<p> Por favor, digite um número válido.</p>`
        return; // Este comando sai da função.
    }

    // Adicionar titulo para tabuada
    resultadoDiv.innerHTML += `<h2>Tabuada Do número ${numero}</h2>`;
    
    // Laço de repetição para gerar tabuada
    for (let i = 1; i <= 18; i++) {
        let resultado = numero * 1
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}
const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("Click", gerarTabuada);


// Adicionar o efeito interativo do mouse no fundo
document.body.addEventListener("mousemove", e => {} 
    // Calcular a posição do mouse em porcentagem da tela
    const x = 

    

