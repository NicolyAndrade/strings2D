import {PALAVRAS_RUINS} from "./palavrasRuins.js"
const botaoMostraPalavras = document.querySelector('#botao-palavrachave');
botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavrasChave = processaTexto(texto);
    
    campoResultado.textContent = palavrasChave.join(", ");
    
}

function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);
    for (let i in palavras){
      palavras [i]=palavras[i].toLowerCase();//LETRAS MINUSCULAS 
    }
    palavras = tiraPalavrasRuins (palavras);
    const frequencias = contafrequencias(palavras) ;
     let ordenadas  = Object.keys(frequencias).sort();
}
  // código omitido{};

    
     for (let j of palavras) 
    
      if (i == j) {
        frequencias[i]++;
      }
    
  
  for (let i of palavras){
  frequencias [i] = 0
 }
  
    console.log(frequencias);
    return palavras;
  }

  function contafrequencias(palavras){

  }let frequencias = {};
    
     for (let j of palavras) 
    
      if (i == j) {
        frequencias[i]++;
      }
    
  
  for (let i of palavras){
  frequencias [i] = 0
 
  
    //console.log(frequencias);
    return frequencias;
}

function tiraPalavrasRuins(palavras) {
  const PALAVRAS_RUINS = new Set(["para", "uma", "nós"]);

  const palavrasBoas = [];

  for (let palavra of palavras) {
    if (!PALAVRAS_RUINS.has(palavra) && palavra.length > 2) {
      palavrasBoas.push(palavra);
    }
  }

  return palavrasBoas;
}