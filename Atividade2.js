var anoAtual = 2022;

var nome = prompt("Digite seu nome completo: ");
var anoNascimento = parseInt(prompt("Digite o ano que você nasceu: "));
while (anoNascimento<=1922 || anoNascimento >2021){
    alert("Erro! Digite um ano entre 1922 e 2021.");
    var anoNascimento = parseInt(prompt("Digite o ano que você nasceu: "));
}
var idadeAtual = anoAtual - anoNascimento;
alert("Nome: "+ nome);
alert("Idade em 2022: " + idadeAtual);
