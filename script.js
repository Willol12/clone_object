const celular = {
  marcaCelular: 'ASUS',
  tamanhoTela: {
    vertical: 155,
    horizontal: 75
  },
  ligar: function () {
    console.log("Fazendo ligação...");
  }
}
//1°Forma de clonar um objeto
//Tem como adicionar alguma propriedade que vai ser imprimida na tela
//diretamente aqui em baixo por exemplo adicionei a bateria e cor
const novoObjeto = Object.assign({
      bateria: 5000,
      cor: 'preta'
},celular);
console.log(novoObjeto);

//2°Forma de clonar
const objeto2 = {...celular};
console.log(objeto2);