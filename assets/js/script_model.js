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
let countl1 = -1;
function addBox1(event){
    countl1+=1;
    let valor1 = parseFloat(countl1);
    console.log('Contagem: '+valor1);

    let pos = event.target.dataset.id;
    console.log('MOSTRA POSIÇÃO: '+pos);
    let container = document.querySelectorAll('#view-encarte')[pos];
    container.innerHTML +=
    `<div id="encarte-main"  class="view" >
        <label for="file-encarte" onclick="addEncarte(event)" class="display-encarte"  data-id="${valor1}">+</label>
            <input type="file" id="file-encarte">`;
    valor1+=1;
    return valor1;
}
let countl2 = -1;
function addBox2(event){
    countl2+=1;
    let valor2 = parseFloat(countl2);
    console.log('Contagem: '+valor2);

    let pos = event.target.dataset.id;
    console.log('MOSTRA POSIÇÃO: '+pos);
    let container = document.querySelectorAll('#view-encarte')[pos];
    container.innerHTML +=
    `<div id="encarte-main"  class="view" >
        <label for="file-encarte" onclick="addEncarte(event)" class="display-encarte"  data-id="${valor2}">+</label>
            <input type="file" id="file-encarte">`;
    valor2+=1;
    return valor2;
}
let countl3 = -1;
function addBox3(event){
    countl3+=1;
    let valor3 = parseFloat(countl3);
    console.log('Contagem: '+valor3);

    let pos = event.target.dataset.id;
    console.log('MOSTRA POSIÇÃO: '+pos);
    let container = document.querySelectorAll('#view-encarte')[pos];
    container.innerHTML +=
    `<div id="encarte-main"  class="view" >
        <label for="file-encarte" onclick="addEncarte(event)" class="display-encarte"  data-id="${valor3}">+</label>
            <input type="file" id="file-encarte">`;
    valor3+=1;
    return valor3;
}
//REMOVER BOX DE ENCARTE EM LINHA
function removeBox(event){
    let pos = event.target.dataset.id;
    console.log('MOSTRA POSIÇÃO: '+pos);
    let linha = document.querySelectorAll('.count-encarte')[pos];
    let del = linha.querySelectorAll('.view')[0];
    del.remove();
    return count-=1;
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
    console.log(view);
    view.style.backgroundImage = `url(${img})`;
    document.querySelectorAll('.display-encarte')[pos].style.display='none';

    // view = `<div id="encarte-main" class="view" style="background-image: url('${img}')" >
    //                     <label for="file-encarte" onclick="addEncarte(event)" class="display-encarte"  data-id="0">+</label>
    //                         <input type="file" id="file-encarte">
    //                 </div>`


    // let viewId = view.querySelectorAll('#encarte-main')[pos];
    // view.style.backgroundImage = `url(${img})`;
    // document.querySelectorAll('.display-encarte')[pos].style.display='none';
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