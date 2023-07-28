function calculadoraDoisNumeros(num1, num2, operacao) {
    if (operacao == 1) {
        var soma = num1 + num2;
        return soma;
    } else if (operacao == 2) {
        var subtracao = num1 - num2;
        return subtracao;
    } else if (operacao == 3) {
        var multiplicacao = num1 * num2;
        return multiplicacao;
    } else if (operacao == 4) {
        var divisao = num1 / num2;
        return divisao;
    } else {
        return 0;
    }
}

var num1 = parseInt(prompt("Digite um número: "));
var num2 = parseInt(prompt("Digite outro número: "));
var operacao = parseInt(prompt("Digite:\n1-SOMA\n2-SUBTRAÇÃO\n3-MULTIPLICAÇÃO\n4-DIVISÃO"));

var resultado = calculadoraDoisNumeros(num1, num2, operacao);
alert(resultado);