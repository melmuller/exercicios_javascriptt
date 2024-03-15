function atualizarCPF(){
    var cpfComPontuacao = document.getElementById("cpfPoint").value;
    var cpfSemPontuacao = cpfComPontuacao.replace(/\D/g, '');
    document.getElementById("cpfNoPoint").value = cpfSemPontuacao;
}