function corFavorita(cor){
  if(cor === 'verde'){
    return 'verde é a cor do dinheiro'
  }
  else if (cor === 'rosa'){
    return 'rosa é tambem uma flor'
  }
  else {
  return 'nao gosto de cor'
  }
}

function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'por favor coloque um numero'
  }
  else if (idade >= 60){
  return true
  }
  else {
  return false
  }

}
console.log(terceiraIdade(60))

