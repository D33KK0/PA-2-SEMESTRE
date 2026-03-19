// Selecionando os elementos do HTML
const btnCalcular = document.getElementById('btnCalcular');
const resultadoDiv = document.getElementById('resultado');

// Função principal para calcular a média
function calcularMedia() {
    // 1. Captura os valores dos inputs e converte para números decimais
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // 2. Validação: Verifica se o usuário digitou números válidos (entre 0 e 10)
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        exibirMensagem("Por favor, preencha as 3 notas!", "reprovado");
        return;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        exibirMensagem("As notas devem ser entre 0 e 10.", "reprovado");
        return;
    }

    // 3. Cálculo da média aritmética
    const media = (nota1 + nota2 + nota3) / 3;

    // 4. Lógica de Aprovação (Média 7.0)
    if (media >= 7) {
        exibirMensagem(`Média: ${media.toFixed(1)} - APROVADO! 🎓`, "aprovado");
    } else {
        exibirMensagem(`Média: ${media.toFixed(1)} - REPROVADO. ❌`, "reprovado");
    }
}

// Função auxiliar para mostrar o resultado na tela com as cores e animações
function exibirMensagem(texto, classe) {
    // Limpa classes anteriores para resetar a animação
    resultadoDiv.className = ""; 
    
    // Força um pequeno "reset" no DOM para a animação rodar novamente
    void resultadoDiv.offsetWidth; 

    // Adiciona a nova classe (aprovado ou reprovado) e o texto
    resultadoDiv.classList.add(classe);
    resultadoDiv.innerHTML = texto;
    
    // Torna a div visível (caso esteja com display: none no CSS)
    resultadoDiv.style.display = "block";
}

// Adiciona o "ouvinte" de clique no botão
btnCalcular.addEventListener('click', calcularMedia);

// 1. Seleciona o novo botão
const btnReset = document.getElementById('btnReset');

// 2. Cria a função de reset
btnReset.addEventListener('click', function() {
    // Limpa os valores de todos os inputs de nota
    document.getElementById('nota1').value = "";
    document.getElementById('nota2').value = "";
    document.getElementById('nota3').value = "";

    // Esconde a div de resultado e limpa as classes de cor (verde/vermelho)
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = "none";
    resultadoDiv.innerHTML = "";
    resultadoDiv.className = "";
    
    // Coloca o cursor de volta na primeira nota automaticamente (foco)
    document.getElementById('nota1').focus();
});