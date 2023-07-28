function calculadora (num1, num2, operador){
    switch (operador){
        case 1:
            return num1 + num2;
        case 2:
            return num1 - num2;
        case 3:
            return num1 * num2;
        case 4:
            return num1 / num2;
        default:
            break;
    }
}

do {
    alert("Operadores:\n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão\n0-Sair");
    var operador = parseInt(prompt("Digite o número que corresponda ao operador:"));
    if (operador===0){
        break;
    }
    if (operador < 1 || operador > 4) {
        alert("Essa opção não existe");
        continue; 
      }
    var num1 = parseFloat(prompt("Digite um número:"));
    var num2 = parseFloat(prompt("Digite outro número:"));
    var calculo = calculadora(num1, num2, operador)
    alert("Resultado: " + calculo)
    
}while (operador!=0);