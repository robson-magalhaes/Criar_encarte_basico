cont = 0;
console.log(cont);
function addBanner(){
    let arquivoBan = document.getElementById('banner').files[0]
    let banner = document.getElementById('main');
    banner.style.backgroundImage = `url(${URL.createObjectURL(arquivoBan)})`;
}
function addHeader(){
    let arquivoBan = document.getElementById('banner-header').files[0]
    let banner = document.getElementById('header-main');
    banner.style.backgroundImage = `url(${URL.createObjectURL(arquivoBan)})`;
}
function addEncarte(){
    // Arquivo Upload 
    let arquivoEnc = document.getElementById('encarte').files[0];
    let img = URL.createObjectURL(arquivoEnc);
    //Preço
    let preco = document.getElementById('preco').value;
    let cPreco = parseFloat(preco).toFixed(2);
    let totalP = cPreco.replace('.', ',');

    //Visual do arquivo
    let viewEncarte = document.getElementById('view-banner');
    viewEncarte.innerHTML += 
    `<div id="view-encarte" style="background-image: url(${img});">
        <div id="imgdiv">
        
        <div id="encart-prec">
        <img src="s.png" alt=""><p>${totalP}</p>
        </div>
        </div>
    </div>`
    // let divView = document.createElement('div');
    // divView.id = "view-encarte";
    // viewEncarte.appendChild(divView);
    // //Imagem
    // let View_encarte = document.querySelectorAll('#view-encarte')[cont];
    // let div_View_encarte = document.createElement('div')
    // div_View_encarte.id = 'imgdiv';
    // View_encarte.appendChild(div_View_encarte);

    // let imgView = document.createElement('img');
    // imgView.src = img
    // div_View_encarte.appendChild(imgView);
    console.log(cont);

    
    return cont += 1;
}

// let encarte = document.getElementById('view-banner');
//     encarte.innerHTML += `<div id="view-encarte">
//         <div id="encart-prec">
//             <img src="s.png"/><p>${totalP}</p>
//         </div>
//     </div>`;
//     let viewEnc = document.getElementById('view-encarte');
//     viewEnc.style.backgroundImage = `url(${img})`;


//PRINCIPAL
// let viewEncarte = document.getElementById('view-banner');
// let divView = document.createElement('div');
// divView.id = "view-encarte";
// viewEncarte.appendChild(divView);
// //Imagem
// let View_encarte = document.querySelectorAll('#view-encarte')[cont];
// let div_View_encarte = document.createElement('div')
// div_View_encarte.id = 'imgdiv';
// View_encarte.appendChild(div_View_encarte);

// let imgView = document.createElement('img');
// imgView.src = img
// div_View_encarte.appendChild(imgView);