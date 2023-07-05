// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector("img");
const imgTop = img.offsetTop;

console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
const imgs = document.querySelectorAll("img");
let soma=0
imgs.forEach((imagens) => {
  soma = soma + img.offsetWidth
  console.log(soma);
});

window.onload = function () {
somaImagens()
 }

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
