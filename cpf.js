function formatarCPF(){
    var cpfInput = document.getElementById("cpf").value.replace(/\D/g, ''); // Remove qualquer caractere que não seja um dígito
    var cpfFormatado = '';

    if (cpfInput.length <= 3) {
        cpfFormatado = cpfInput;
    } else if (cpfInput.length <= 6) {
        cpfFormatado = cpfInput.substring(0, 3) + '.' + cpfInput.substring(3);
    } else if (cpfInput.length <= 9) {
        cpfFormatado = cpfInput.substring(0, 3) + '.' + cpfInput.substring(3, 6) + '.' + cpfInput.substring(6);
    } else {
        cpfFormatado = cpfInput.substring(0, 3) + '.' + cpfInput.substring(3, 6) + '.' + cpfInput.substring(6, 9) + '-' + cpfInput.substring(9);
    }

    document.getElementById("cpfFormatado").textContent = cpfFormatado;
}