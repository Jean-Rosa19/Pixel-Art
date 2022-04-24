// código para selecionar a cor.


let paletaDeCores = document.getElementsByClassName("color");

for (var i = 0; i < paletaDeCores.length; i++) {
    paletaDeCores[i].addEventListener('click',selecionarCor);
}

function selecionarCor(eventoClick) {
    // essa função vai remover a classe selected de todos os  elementos
    for (var i = 0; i < paletaDeCores.length; i++) {
       
        if (paletaDeCores[i].className.includes("selected")){
            paletaDeCores[i].className = paletaDeCores[i].className.replace('selected', "")
        } 
        
    }
    

    // e adicionar a classe selected no elemeno clicado.
   
    let classes =  eventoClick.currentTarget.className.split(' ');
    classes.push("selected");
    eventoClick.currentTarget.className = classes.join(' ')

};

// =====================================================================================================

// código para pintar o pixel.
let todosOsPixels = document.getElementsByClassName("pixel");

for (var i = 0; i < todosOsPixels.length; i++) {
    todosOsPixels[i].addEventListener('click',pintarPixel);
}

function pintarPixel(eventoClick) {

    // estamos recuperando a cor selecionada atraves da classe.
  let elementoDaCorSelecionada = document.querySelector(".color.selected")
   let classeDaCor = elementoDaCorSelecionada.classList[1]

   eventoClick.currentTarget.className = "pixel " +  classeDaCor
};

//======================================================================================================
// adiocnando o listener no botão.

let elementoDoBotao = document.getElementById("clear-board");
elementoDoBotao.addEventListener("click", resetPixels);
function resetPixels(){
    for (let i = 0; i < todosOsPixels.length; i += 1){
        if (todosOsPixels[i].className != "pixel"){
            todosOsPixels[i].className = "pixel"
        }
    }
}