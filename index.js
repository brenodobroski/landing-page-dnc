const leonardo = document.getElementById("leonardo");
const samantha = document.getElementById("samantha");
const bruna = document.getElementById("bruna");
const setaDireita = document.getElementById("seta-direita");
const setaEsquerda = document.getElementById("seta-esquerda");

function RolarParaDireita() {
  leonardo.style = "display: none";
  bruna.style = "display: inline";
  setaDireita.style = "display: none";
  setaEsquerda.style = "display: inline";
}

function RolarParaEsquerda() {
  leonardo.style = "display: inline";
  bruna.style = "display: none";
  setaDireita.style = "display: inline";
  setaEsquerda.style = "display: none";
}
