
function exibirNome() {
    var nomeCompleto = document.getElementById('nome').value;
    if(nomeCompleto.trim() === '') {
        alert("Por favor, digite seu nome completo.");
    } else {
        var quantidadeLetras = nomeCompleto.length;
        alert("O Nome Completo é: \"" + nomeCompleto + "\".\nQuantidade de letras: " + quantidadeLetras);
    }
}



