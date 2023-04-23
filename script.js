var dados = {
  nome:'luiz',
  sobrenome:'eduardo',
  idade:14,
  sexo:'masculino'
}

dados.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`
}

var carro = {
  preco:1000,
  portas:4,
  marca:'audi',
}

carro.preco=3000


var cachorro ={
  raca:'labrador',
  cor:'preto',
  idade:10,
  latir(pessoas){
    if(pessoas==='homem')
    return 'latir'
    else {
      return'nada'
    }
  }