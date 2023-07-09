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
            <label for="" onclick="abrirAjuste(event)" class="display-encarte"  data-id="${pos}" data-item1=${count['linha1']}>+</label></div>`;
    }
    if(pos == 1){
        count["linha2"] += 1;
        console.log(count);
        let container = document.querySelectorAll('#view-encarte')[pos];
        container.innerHTML +=
        `<div id="encarte-main"  class="view" data-item2=${count['linha2']} data-id="${pos}">
            <label for="" onclick="abrirAjuste(event)" class="display-encarte"  data-id="${pos}" data-item2=${count['linha2']}>+</label></div>`;
    }
    if(pos == 2){
        count["linha3"] += 1;
        console.log(count);
        let container = document.querySelectorAll('#view-encarte')[pos];
        container.innerHTML +=
        `<div id="encarte-main"  class="view" data-item3=${count['linha3']} data-id="${pos}">
            <label for="" onclick="abrirAjuste(event)" class="display-encarte"  data-id="${pos}" data-item3=${count['linha3']}>+</label></div>`;
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
        let view = document.querySelectorAll('div[data-id="0"]')[item1];
        console.log('valor da view: '+view);
        // view.style.backgroundImage = `url(${img})`;
        view.innerHTML = `<div id="encarte-main"  class="view" style="background-image: url("${img}");">
        </div>`;
        document.querySelectorAll('label[data-id="0"]')[item1].style.display='none';
        return
    }
    if(pos == 1){
        let file = document.getElementById('file-encarte').files[0];
        let img = URL.createObjectURL(file);
        let view = document.querySelectorAll('div[data-id="1"]')[item2];
        console.log('valor da view: '+view);
        view.style.backgroundImage = `url(${img})`;
        document.querySelectorAll('label[data-id="1"]')[item2].style.display='none';
        return
    }
    if(pos == 2){
        let file = document.getElementById('file-encarte').files[0];
        let img = URL.createObjectURL(file);
        let view = document.querySelectorAll('div[data-id="2"]')[item3];
        console.log('valor da view: '+view);
        view.style.backgroundImage = `url(${img})`;
        document.querySelectorAll('label[data-id="2"]')[item3].style.display='none';
        return
    }
};

function abrirAjuste(event){
    console.log(event.target);
    let item = '';
    let a = parseInt(event.target.dataset.id);
    if(event.target.dataset.item1){
        console.log('if 1');
        item = parseInt(event.target.dataset.item1);
    }
    if(event.target.dataset.item2){
        console.log('if 2');
        item = parseInt(event.target.dataset.item2);
    }
    if(event.target.dataset.item3){
        console.log('if 3');
        item = parseInt(event.target.dataset.item3);
    }
    console.log('Veio até aqui');
    console.log('item: '+typeof(item));
    console.log('posição: '+a);
    let view = document.getElementById('ajusteEncarte');
    view.style.display = 'block';
    view.innerHTML = `<h4>Tela de ajustes de encarte</h4>
    <label for="file-encarte">upload</label>
    <input type="file" id="file-encarte" display="block"><br><hr>
    Preço:
    <input type="number" id="valor"><br>
    <img src="" alt="Sem imagem por enquanto"/><br>
    <button onclick="addEncarte(event)" id="btn-enc" data-id="${a}" data-item${a+1}="${item}">ENVIAR</button>`;
    return
}