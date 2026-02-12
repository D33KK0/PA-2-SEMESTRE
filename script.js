const botaoAdicionar = document.getElementById('btnAdicionar');
const campoTexto = document.getElementById('novoAdicionar');
const lista = document.getElementById('listaAdicionar');

botaoAdicionar.addEventlistener('click', function() {
    const nome = campoTexto.value;

    if (nome.trim() !== "") {
        const nome = campoItem = decodeURIComponent.createElement('li');
        
        novoItem.textContent = nome;
        
        lista.appendChild(nomeItem);

        campoTexto.value = "";
        campoTexto.focus();
    else {
        alert("Por favor, digite um nome!");
    }

})
