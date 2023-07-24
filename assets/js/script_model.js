//ADICIONAR O HEADER
document.getElementById('file-header').addEventListener('change', function addHeader(){
    let file = document.getElementById('file-header').files[0];
    let view = document.getElementById('header-main');
    var img = URL.createObjectURL(file);
    view.innerHTML = `<img src="${img}"/>`;
    document.getElementById('display-header').style.display='none';
});
//ADICIONAR O FOOTER
// document.getElementById('file-footer').addEventListener('change', function addFooter(){
//     let file = document.getElementById('file-footer').files[0];
//     let view = document.getElementById('footer-main');
//     var img = URL.createObjectURL(file);
//     view.style.backgroundImage = `url(${img})`;
//     document.getElementById('display-footer').style.display='none';
// });

//ADICIONAR BOX DE ENCARTE EM LINHA
let count = {'linha1':0, 'linha2': 0,'linha3':0};
// console.log(count);
function addBox(event){
    let pos = event.target.dataset.id;
    if(pos == 0){
        console.log(count);
        // console.log('MOSTRA POSIÇÃO: '+pos);
        let container = document.querySelectorAll('#view-encarte')[pos];
        container.innerHTML +=
        `<div id="encarte-main"  class="view" data-item1=${count['linha1']} data-id="${pos}">
            <label for="" onclick="abrirAjuste(event)" class="display-encarte"  data-id="${pos}" data-item1=${count['linha1']}>+</label></div>`;
            return count["linha1"] += 1;
    }
    if(pos == 1){
        console.log(count);
        let container = document.querySelectorAll('#view-encarte')[pos];
        container.innerHTML +=
        `<div id="encarte-main"  class="view" data-item2=${count['linha2']} data-id="${pos}">
            <label for="" onclick="abrirAjuste(event)" class="display-encarte"  data-id="${pos}" data-item2=${count['linha2']}>+</label></div>`;
        return count["linha2"] += 1;
    }
    if(pos == 2){
        console.log(count);
        let container = document.querySelectorAll('#view-encarte')[pos];
        container.innerHTML +=
        `<div id="encarte-main"  class="view" data-item3=${count['linha3']} data-id="${pos}">
            <label for="" onclick="abrirAjuste(event)" class="display-encarte"  data-id="${pos}" data-item3=${count['linha3']}>+</label></div>`;
        return count["linha3"] += 1;
    }
};

//REMOVER BOX DE ENCARTE EM LINHA
function removeBox(event){
    let a = event.target;
    console.log(a);
    let pos = event.target.dataset.id;
    console.log('MOSTRA POSIÇÃO: '+pos);
    let linha = document.querySelectorAll('.count-encarte')[pos];
    let del = linha.querySelectorAll('.view');
    if(pos == 0){
        if(count["linha1"] > 0){
            count["linha1"] -= 1;
            del[count["linha1"]].remove();
            return 
        }
    }
    if(pos == 1){
        if(count["linha2"] > 0){
            count["linha2"] -= 1;
            del[count["linha2"]].remove();
            return 
        }
    }
    if(pos == 2){
        if(count["linha3"] > 0){
            count["linha3"] -= 1;
            del[count["linha3"]].remove();
            return 
        }
    }
};

//ADICIONAR IMAGEM DO ENCARTE
function addEncarte(event){
    console.log(event.target);
    console.log('Valor acima é do event');
    let ajuste = document.getElementById('ajusteEncarte');
    // ajuste.style.display = 'none';
    ajuste.style.scale = 0.01;
    let pos = event.target.dataset.id;
    let item1 = event.target.dataset.item1;
    let item2 = event.target.dataset.item2;
    let item3 = event.target.dataset.item3;
    let formP = document.getElementById('formProd').value;
    console.log('item: '+item1);
    console.log('Posição: '+pos);
    //VALOR
    let valor = document.createElement('div');
    valor.id="valorEnc";
    let preco = document.getElementById('valorPreco').value;
    let precoConvert = parseFloat(preco);
    console.log(precoConvert);
    valor.innerHTML += `<div> ${(precoConvert.toFixed(2)).replace('.', ',')} <h6>${formP}</h6> </div>`;
    //adicionando bg do valor
    let bgValor = document.createElement('img');
    bgValor.src = 'assets/image/bgPrecoOk.png';
    valor.appendChild(bgValor);
    //Descrição do nome do produto
    let nomeProduto = document.getElementById('descProduto').value;
    let addNome = document.createElement('div');
    addNome.id= 'nomeProduto';

    if(pos == 0){
        let file = document.getElementById('file-encarte').files[0];
        let img = URL.createObjectURL(file);
        let view = document.querySelectorAll('div[data-id="0"]')[item1];
        view.appendChild(valor);
        //Imagem do encarte 
        console.log('valor da view: '+view);
        view.appendChild(addNome);
        addNome.innerHTML = nomeProduto;
        let imgView = document.createElement('img');
        imgView.src = `${img}`;
        view.appendChild(imgView);
        // view.innerHTML = '<img src="${img}"/>'
        // view.style.backgroundImage = `url(${img})`;
        //Removendo o label
        document.querySelectorAll('label[data-id="0"]')[item1].style.display='none';
        return
    }
    if(pos == 1){
        let file = document.getElementById('file-encarte').files[0];
        let img = URL.createObjectURL(file);
        let view = document.querySelectorAll('div[data-id="1"]')[item2];
        view.appendChild(valor);
        //Imagem do encarte 
        console.log('valor da view: '+view);
        view.appendChild(addNome);
        addNome.innerHTML = nomeProduto;
        let imgView = document.createElement('img');
        imgView.src = `${img}`;
        view.appendChild(imgView);
        // view.innerHTML = '<img src="${img}"/>'
        // view.style.backgroundImage = `url(${img})`;
        //Removendo o label
        document.querySelectorAll('label[data-id="1"]')[item2].style.display='none';
        return
    }
    if(pos == 2){
        let file = document.getElementById('file-encarte').files[0];
        let img = URL.createObjectURL(file);
        let view = document.querySelectorAll('div[data-id="2"]')[item3];
        view.appendChild(valor);
        //Imagem do encarte 
        console.log('valor da view: '+view);
        view.appendChild(addNome);
        addNome.innerHTML = nomeProduto;
        let imgView = document.createElement('img');
        imgView.src = `${img}`;
        view.appendChild(imgView);
        // view.innerHTML = '<img src="${img}"/>'
        // view.style.backgroundImage = `url(${img})`;
        //Removendo o label
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
    console.log('item: '+item);
    console.log('posição: '+a);
    let view = document.getElementById('ajusteEncarte');
    // view.style.display = 'block';
    view.style.scale =  150;
    view.innerHTML = `<h2>ADICIONAR ENCARTE</h2><br><hr><br>
    <div>
        <h3>ADICIONAR IMAGEM DO PRODUTO</h3>
        <input type="file" id="file-encarte" display="block"><br>
    </div>
    <div>
        <h3>NOME DO PRODUTO</h3><br>
        <input type="text" id="descProduto" required><br>
    </div>
    <div class="formatoPreco">
        <div>
            <label for=""><h3>PREÇO</h3><br>
            <input type="number" id="valorPreco" required></label>
        </div>
        <div id="formPreco">
            <label for=""><h3>Unidade,Kg, Litros...</h3><br>
            <input type="text" id="formProd" required></label>
        </div>
    </div>
    <div>
        <button onclick="addEncarte(event)" id="btn-enc" data-id="${a}" data-item${a+1}="${item}">ENVIAR</button>
    </div>`;
    return
}