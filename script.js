// Verifique a distância da primeira imagem
// em relação ao topo da página
const dImg = document.querySelector("img");
console.log(dImg.offsetTop);
// Retorne a soma da largura de todas as imagens
const TImg = document.querySelectorAll("img");
console.log(TImg.offsetLeft);
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

if (window.innerHeight < 720) {
  classlist.add("menu-mobile");
}
