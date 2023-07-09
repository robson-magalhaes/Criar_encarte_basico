//ADICIONAR O HEADER
document.getElementById('file-header').addEventListener('change', function addHeader(){
    let file = document.getElementById('file-header').files[0];
    let view = document.getElementById('header-main');
    var img = URL.createObjectURL(file);
    view.style.backgroundImage = `url(${img})`;
    document.getElementById('display-header').style.display='none';
});
//ADICIONAR O FOOTER
document.getElementById('file-footer').addEventListener('change', function addFooter(){
    let file = document.getElementById('file-footer').files[0];
    let view = document.getElementById('footer-main');
    var img = URL.createObjectURL(file);
    view.style.backgroundImage = `url(${img})`;
    document.getElementById('display-footer').style.display='none';
});

//ADICIONAR BOX DE ENCARTE EM LINHA
let count = {'linha1':-1, 'linha2': -1,'linha3':-1};
// console.log(count);
function addBox(event){
    let pos = event.target.dataset.id;
    if(pos == 0){
        count["linha1"] += 1;
        console.log(count);
        // console.log('MOSTRA POSIÇÃO: '+pos);
        let container = document.querySelectorAll('#view-encarte')[pos];
        container.innerHTML +=
        `<div id="encarte-main"  class="view" data-item1=${count['linha1']} data-id="${pos}">
            <label for="" onclick="abrirAjuste(event)" class="display-encarte"  data-id="${pos}" data-item1=${count['linha1']}>+</label>
                `;
        return
    }
    if(pos == 1){
        count["linha2"] += 1;
        console.log(count);
        let container = document.querySelectorAll('#view-encarte')[pos];
        container.innerHTML +=
        `<div id="encarte-main"  class="view" data-item2=${count['linha2']} data-id="${pos}">
            <label for="file-encarte" onclick="addEncarte(event)" class="display-encarte"  data-id="${pos}" data-item2=${count['linha2']}>+</label>
                <input type="file" id="file-encarte">`;
        return
    }
    if(pos == 2){
        count["linha3"] += 1;
        console.log(count);
        let container = document.querySelectorAll('#view-encarte')[pos];
        container.innerHTML +=
        `<div id="encarte-main"  class="view" data-item3=${count['linha3']} data-id="${pos}">
            <label for="file-encarte" onclick="addEncarte(event)" class="display-encarte"  data-id="${pos}" data-item3=${count['linha3']}>+</label>
                <input type="file" id="file-encarte">`;
        return
    }
};

//REMOVER BOX DE ENCARTE EM LINHA
function removeBox(event){
    let a = event.target;
    console.log(a);
    let pos = event.target.dataset.id;
    console.log('MOSTRA POSIÇÃO: '+pos);
    let linha = document.querySelectorAll('.count-encarte')[pos];
    let del = linha.querySelectorAll('.view')[0];
    del.remove();
    if(pos == 0){
        count["linha1"] -= 1;
    }
    if(pos == 1){
        count["linha2"] -= 1;
    }
    if(pos == 2){
        count["linha1"] -= 1;
    }
    return
};

//ADICIONAR IMAGEM DO ENCARTE
function addEncarte(event){
    console.log(event.target);
    console.log('Valor acima é do event');
    let v = document.getElementById('ajusteEncarte');
    v.style.display = 'none';
    let pos = event.target.dataset.id;
    let item1 = event.target.dataset.item1;
    let item2 = event.target.dataset.item2;
    let item3 = event.target.dataset.item3;
    console.log('item: '+item1);
    console.log('Posição: '+pos);
    if(pos == 0){
        let file = document.getElementById('file-encarte').files[0];
        let img = URL.createObjectURL(file);
        // console.log(img);
        // let view = document.querySelectorAll('.view')[item1];
        let view = document.querySelectorAll('div[data-id="0"]')[item1];
        // let view = document.querySelectorAll('div[data-item1="'+item+'"]')[item1];
        console.log(view);
        view.style.backgroundImage = `url(${img})`;
        document.querySelectorAll('label[data-id="0"]')[item1].style.display='none';
        return
    }
    if(pos == 1){
        let file = document.getElementById('file-encarte').files[0];
        let img = URL.createObjectURL(file);
        // console.log(img);
        // let view = document.querySelectorAll('.view')[item2];
        let view = document.querySelectorAll('div[data-id="1"]')[item2];
        // let view = document.querySelectorAll('div[data-item1="'+item+'"]')[item2];
        console.log(view);
        view.style.backgroundImage = `url(${img})`;
        document.querySelectorAll('label[data-id="1"]')[item2].style.display='none';
        return
    }
    if(pos == 2){
        let file = document.getElementById('file-encarte').files[0];
        let img = URL.createObjectURL(file);
        // console.log(img);
        // let view = document.querySelectorAll('.view')[item3];
        let view = document.querySelectorAll('div[data-id="2"]')[item3];
        // let view = document.querySelectorAll('div[data-item1="'+item+'"]')[item3];
        console.log(view);
        view.style.backgroundImage = `url(${img})`;
        document.querySelectorAll('label[data-id="2"]')[item3].style.display='none';
        return
    }
};

function abrirAjuste(event){
    console.log(event.target);
    let a = event.target.dataset.id;
    let b = event.target.dataset.item1;
    console.log(a);
    console.log(b);
    let view = document.getElementById('ajusteEncarte');
    view.style.display = 'block';
    let v = document.getElementById('ajusteEncarte');
    v.innerHTML = `<h4>Tela de ajustes de encarte</h4>
    <label for="file-encarte">upload</label>
    <input type="file" id="file-encarte">
    <input type="number" id="valor">
    <button onclick="addEncarte(event)" id="btn-enc" data-id="${a}" data-item1="${b}">ENVIAR</button>`;
    return
}