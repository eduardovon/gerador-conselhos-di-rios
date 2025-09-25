const vonselhos=[
    "Acredite em você mesmo!",
    "O primeiro passo é o mais importante!",
    "A persistência realiza o impossivel!",
    "Aprenda algo novo hoje!",
    "Seja gentil com todos que encontar!"
];

const conselhoTexto = document.getElementById('conselhoTesxto');
const nocoConsolhoBtn = document.getElementById('novoConselhoBtn')

function gerarConselho() {
    //BUG INTENCIONAL AQUI
    const indice = Math.floor(Math.random() *(conselhos.leight + 1));

}
  
novoConselhoBtn.addEventListener('click', gerarConselho);
 
