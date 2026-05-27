const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", calcularMediaEscolar);

function calcularMediaEscolar() {
    // 1. Captura dos valores dos inputs
    let Idade = parseFloat(document.getElementById("idade").value);

    // 2. Validação (Verifica se os campos estão vazios ou não são números)
    if (isNaN(Idade)) {
        resultado.innerHTML = "<p style='color: red;'>Por favor, insira sua idade.</p>";
        return;
    }

    // 3. Cálculo da Média
    let idade = Idade / 1; // Apenas para garantir que seja um número
    
    // 4. Lógica de Aprovação (Condicional if/else)
    let status;
    let corStatus;

    if (idade < 16) {
                status = "Você não pode votar.";
                corStatus = "yellow";
            }

            if (idade >= 16 && idade <= 17){
                status = "Seu voto é opcional.";
                corStatus = "blue";
            }

            if(idade >= 18){
                status = "Seu Voto é obrigatório.";
                corStatus = "red";
            }

            if(idade >= 65){
                status = "Seu Voto não é obrigátorio.";
                corStatus = "green";
            }

    // 5. Exibição do Resultado
    resultado.innerHTML = `
        <p>Idade: <strong>${idade.toFixed(1)}</strong></p>
        <p>Status: <span style="color: ${corStatus}; font-weight: bold;">${status}</span></p>
    `;
}