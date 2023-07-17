function ajusteCor(){
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
    console.log('valor da font:'+font1);
    console.log('valor da font:'+font2);
    area1.style.fontSize = font1+'px';
    area2.style.fontSize = font2+'px';

    let input1 = document.getElementById('footer1');
    let input2 = document.getElementById('footer2');
    input1.style.backgroundColor = `${corBg1}`;
    input2.style.backgroundColor = `${corBg2}`;
    area1.innerHTML = input1.value;
    area2.innerHTML = input2.value;
}
function aplicarFooter(){
    let linha1 = document.getElementById('footer1');
    let linha2 = document.getElementById('footer2');
    let input1 = document.getElementById('footer-area-1').value;
    let input2 = document.getElementById('footer-area-2').value;
    linha1.innerHTML = input1;
    linha2.innerHTML = input2;
}