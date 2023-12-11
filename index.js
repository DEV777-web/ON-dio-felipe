function calcularRank(vitorias, derrotas) {
  var saldoVitorias = vitorias - derrotas;
  var nivel;

  if (vitorias <= 10) {
   nivel = "Ferro1";
  } else if (vitorias >= 11 && vitorias <= 20) {
  nivel = "Bronze2";
  } else if (vitorias >= 21 && vitorias <= 50) {
     nivel = "Prata3";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro4";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante5";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário6";
  } else {
    nivel = "Imortal10";
  }

  var mensagem = "O Herói tem um saldo de " + saldoVitorias + " e está no nível de " + nivel;
  return mensagem;
}


var quantidadeVitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
var quantidadeDerrotas = parseInt(prompt("Digite a quantidade de derrotas:"));

var resultado = calcularRank(quantidadeVitorias, quantidadeDerrotas);
console.log(resultado);
