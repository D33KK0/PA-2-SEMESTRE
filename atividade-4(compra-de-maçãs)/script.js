function calcular(){
    let quantidade = Number(document.getElementById("quantidade").value);
    let preco;
    let total;

    if (quantidade < 12) {
        preco = 1.3;
    } else {
        preco = 1;
    }

    total = quantidade * preco;

    document.getElementById("resultado").innerHTML = `Total da compra: R$ ${total.toFixed(2)}`;
    // força aparecer

    let resultado = document.getElementById("resultado");
    resultado.innerText = `Total da compra: R$ ${total.toFixed(2)}`;
    resultado.classList.add("mostrar");
    
}
