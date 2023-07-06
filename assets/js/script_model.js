//ADD O EVENTO DE ADICIONAR O HEADER
document.getElementById('file-header').addEventListener('change', function addHeader(){
    let file = document.getElementById('file-header').files[0];
    let view = document.getElementById('header-main');
    var img = URL.createObjectURL(file);
    view.style.backgroundImage = `url(${img})`;
    document.getElementById('display-header').style.display='none';
});

document.getElementById('file-footer').addEventListener('change', function addFooter(){
    let file = document.getElementById('file-footer').files[0];
    let view = document.getElementById('footer-main');
    var img = URL.createObjectURL(file);
    view.style.backgroundImage = `url(${img})`;
    document.getElementById('display-footer').style.display='none';
});
//ADICIONAR BOX DE ENCARTE EM LINHA
let count = -1;
function addBox(event){
    count+=1;
    let valor = parseFloat(count);
    console.log('Contagem: '+valor);

    let pos = event.target.dataset.id;
    console.log('MOSTRA POSIÇÃO: '+pos);
    let container = document.querySelectorAll('#view-encarte')[pos];
    container.innerHTML +=
    `<div id="encarte-main"  class="view" >
        <label for="file-encarte" onclick="addEncarte(event)" class="display-encarte"  data-id="${valor}">+</label>
            <input type="file" id="file-encarte">`;
    // `<div id="k1"><div id="encarte-main" class="view" >
    //     <label for="file-encarte" onclick="addEncarte(event)" class="display-encarte"  data-id="${valor}">+</label>
    //         <input type="file" id="file-encarte">
    // </div>`;
    valor+=1;
    return valor;
}
//REMOVER BOX DE ENCARTE EM LINHA
function removeBox(event){
    let pos = event.target.dataset.id;
    console.log('MOSTRA POSIÇÃO: '+pos);
    let linha = document.querySelectorAll('.count-encarte')[pos];
    let del = linha.querySelectorAll('.view')[0];
    del.remove();
}

//ADICIONAR IMAGEM DO ENCARTE

// document.getElementById('file-encarte').addEventListener('change', 
function addEncarte(event){
    let pos = event.target.dataset.id;
    // let cs = pos.previousElementSibling;
    // console.log(cs);
    let file = document.getElementById('file-encarte').files[0];
    // let view = document.getElementById('encarte-main');
    let img = URL.createObjectURL(file);
    let view = document.querySelectorAll('.view')[pos];
    // let viewId = view.querySelectorAll('#encarte-main')[pos];
    view.style.backgroundImage = `url(${img})`;
    document.querySelectorAll('.display-encarte')[pos].style.display='none';
}
//);

document.addEventListener('DOMContentLoaded', addEncarte);

// function addEncarte(event){
//     let pos = event.target.dataset.id;
//     // let cs = pos.previousElementSibling;
//     // console.log(cs);
//     let file = document.getElementById('file-encarte').files[0];
//     // let view = document.getElementById('encarte-main');
//     let img = URL.createObjectURL(file);
//     let view = document.querySelectorAll('.view')[pos];
//     // let viewId = view.querySelectorAll('#encarte-main')[pos];
//     view.style.backgroundImage = `url(${img})`;
//     document.querySelectorAll('.display-encarte')[pos].style.display='none';
// }