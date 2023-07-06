//ADD O EVENTO DE ADICIONAR O HEADER
document.getElementById('file-header').addEventListener('change', function addHeader(){
    let file = document.getElementById('file-header').files[0];
    let view = document.getElementById('header-main');
    var img = URL.createObjectURL(file);
    view.style.backgroundImage = `url(${img})`;
    document.getElementById('display-header').style.display='none';
});

//ADD O EVENTO DE ADICIONAR ENCARTE

// document.addEventListener('DOMContentLoaded', addEncarte);

document.getElementById('file-encarte').addEventListener('change', addEncarte);
    function addEncarte(event){
        let pos = event.target.dataset.id;
        // let cs = pos.previousElementSibling;
        // console.log(cs);
        let file = document.getElementById('file-encarte').files[0];
        // let view = document.getElementById('encarte-main');
        var img = URL.createObjectURL(file);

        let view = document.querySelectorAll('.view')[pos];
        view.style.backgroundImage = `url(${img})`;
        document.querySelectorAll('.display-encarte')[pos].style.display='none';
}

// document.getElementById('file-encarte').addEventListener('change', function addEncarte(){
//     let file = document.getElementById('file-encarte').files[0];
//     let view = document.getElementById('encarte-main');
//     var img = URL.createObjectURL(file);
//     view.style.backgroundImage = `url(${img})`;
//     document.getElementById('display-encarte').style.display='none';
// });



var valor = '';

function addBox(event){
    let count =0;
    count+=1;
    console.log(count)
    let valor = parseFloat(count);
    valor+=1;
    console.log('Contagem: '+valor);
    let pos = event.target.dataset.id;
    console.log('Posição: '+pos);
    let container = document.querySelectorAll('#view-encarte')[pos];
    container.innerHTML +=
    `<div id="encarte-main" class="view" >
        <label for="file-encarte" onclick="addEncarte(event)" class="display-encarte"  data-id="${valor}">+</label>
            <input type="file" id="file-encarte">
    `;
    return valor;
}

function removeBox(event){
    let pos = event.target.dataset.id;
    console.log(pos);
    let del = document.querySelectorAll('.view')[0];
    del.remove();
}




//ADD O EVENTO DE ADICIONAR O FOOTER
document.getElementById('file-footer').addEventListener('change', function addFooter(){
    let file = document.getElementById('file-footer').files[0];
    console.log(file);
    let view = document.getElementById('footer-main');
    var img = URL.createObjectURL(file);
    view.style.backgroundImage = `url(${img})`;
    document.getElementById('display-footer').style.display='none';
});
