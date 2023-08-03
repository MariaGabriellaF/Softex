const Candidatos = {
    CANDIDATOX: 889,
    CANDIDATOY: 847,
    CANDIDATOZ: 515,
    BRANCO: 0,
};
var contagem0 = 0;
var contagemX = 0;
var contagemY = 0;
var contagemZ = 0;

var sair = false;
do {
    var voto = parseInt(prompt("Digite o número do seu candidato.\n889 - CandidatoX\n847 - CandidatoY\n515 - CandidatoZ\n0 - Branco/Nulo\n"));
    if (isNaN(voto)) {
        alert("Erro! Digite um número para que o seu voto seja válido");
        continue;
    }

    if (voto == Candidatos.CANDIDATOX) {
        contagemX += 1;
    } else if (voto == Candidatos.CANDIDATOY) {
        contagemY += 1;
    } else if (voto == Candidatos.CANDIDATOZ) {
        contagemZ += 1;
    } else {
        contagem0 += 1;
    }

    var desejaSair = prompt("Deseja sair?")

    if (desejaSair.toLocaleLowerCase() === "sim") {
        sair = true;
    }
} while (!sair);
if (contagemX > contagemY && contagemX > contagemZ && contagemX > contagem0){
    console.log("O vencedor foi: CANDIDATOX");
}else if (contagemY > contagemX && contagemY > contagemZ && contagemY > contagem0){
    console.log("O vencedor foi: CANDIDATOY");
}else if (contagemZ > contagemX && contagemZ > contagemY && contagemX > contagem0){
    console.log("O vencedor foi: CANDIDATOZ");
}else{
    console.log("Nenhum candidato venceu!\nOutra eleição será feita em breve.");
}

console.log("---Contagem de votos---");
console.log("CandidatoX: " + contagemX);
console.log("CandidatoY: " + contagemY);
console.log("CandidatoZ: " + contagemZ);
console.log("Brancos e Nulos: " + contagem0);

