// Crie uma função para verificar se um valor é Truthy
function verificar(valor) {
  return !!valor;
}
verificar();
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  console.log(2 * lado + 2 * lado);
}
perimetro(5);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  console.log(`${nome} ${sobrenome}`);
}
nomeCompleto("andre", "cachorro");
// Crie uma função que verifica se um número é par
function naoSei(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}
naoSei();
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function verific(item) {
  console.log(typeof item);
}
verific("ola");

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("luiz");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(80);
