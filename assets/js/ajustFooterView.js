function ajusteCor(){
    let area1 = document.getElementById('footer-area-1');
    let area2 = document.getElementById('footer-area-2');
    let input1 = document.getElementById('footer1');
    let input2 = document.getElementById('footer2');
    area1.innerHTML = input1.value;
    area2.innerHTML = input2.value;
}
document.addEventListener('change', function ajusteCor(){
    let area1 = document.getElementById('footer-area-1');
    let corBg1 = document.getElementById('corBgFooter1').value;
    let corLet1 = document.getElementById('corLetFooter1').value;
    area1.style.backgroundColor = `${corBg1}`;
    area1.style.color = corLet1;
    
    let area2 = document.getElementById('footer-area-2');
    let corBg2 = document.getElementById('corBgFooter2').value;
    let corLet2 = document.getElementById('corLetFooter2').value;
    area2.style.backgroundColor = `${corBg2}`;
    area2.style.color = corLet2;

    let font1 = document.querySelector('#font1').value;
    let font2 = document.querySelector('#font2').value;
    area1.style.fontSize = font1+'px';
    area2.style.fontSize = font2+'px';

    
    let input1 = document.getElementById('footer1');
    let input2 = document.getElementById('footer2');
    area1.innerHTML = input1.value;
    area2.innerHTML = input2.value;

    input1.style.backgroundColor = `${corBg1}`;
    input2.style.backgroundColor = `${corBg2}`;
    input1.style.color = corLet1;
    input2.style.color = corLet2;
    input1.style.fontSize = font1+'px';
    input2.style.fontSize = font2+'px';
    corFundoView()
}
);
function corFundoView(){
    let cor = document.querySelector('#box-corEncarte>input').value;
    let view = document.querySelectorAll('#view-encarte');
    view.forEach((item)=>{
        item.style.backgroundColor= `${cor}`;
    })
}
