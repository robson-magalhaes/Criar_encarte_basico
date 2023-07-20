function getCookie(name) {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
}

restaurarConteudoLocalStorage();

function salvarInputs() {
  var inputFooter1 = document.getElementById("footer1").value;
  var inputFooter2 = document.getElementById("footer2").value;
  var inputFooterBG1 = document.getElementById("corBgFooter1").value;
  var inputFooterBG2 = document.getElementById("corBgFooter2").value;
  var inputFooterleet1 = document.getElementById("corLetFooter1").value;
  var inputFooterleet2 = document.getElementById("corLetFooter2").value;
  var inputFont1 = document.getElementById('font1').value;
  var inputFont2 = document.getElementById('font2').value;

  localStorage.setItem("inputFooter1", inputFooter1);
  localStorage.setItem("inputFooter2", inputFooter2);
  localStorage.setItem("inputFooterBG1", inputFooterBG1);
  localStorage.setItem("inputFooterBG2", inputFooterBG2);
  localStorage.setItem("inputFooterleet1", inputFooterleet1);
  localStorage.setItem("inputFooterleet2", inputFooterleet2);
  localStorage.setItem("inputFont1", inputFont1);
  localStorage.setItem("inputFont2", inputFont2);
}

function salvarConteudoLocalStorage() {
  salvarInputs();
  var conteudoAjusteCor = document.getElementById("ajusteCor").innerHTML;
  var conteudoFooterMain = document.getElementById("footer-main").innerHTML;
  localStorage.setItem("conteudoAjusteCor", conteudoAjusteCor);
  localStorage.setItem("conteudoFooterMain", conteudoFooterMain);
}

function restaurarConteudoLocalStorage() {
  var conteudoAjusteCor = localStorage.getItem("conteudoAjusteCor");
  var conteudoFooterMain = localStorage.getItem("conteudoFooterMain");
  var inputFooter1 = localStorage.getItem("inputFooter1");
  var inputFooter2 = localStorage.getItem("inputFooter2");
  var inputFooterBG1 = localStorage.getItem("inputFooterBG1");
  var inputFooterBG2 = localStorage.getItem("inputFooterBG2");
  var inputFooterleet1 = localStorage.getItem("inputFooterleet1");
  var inputFooterleet2 = localStorage.getItem("inputFooterleet2");
  var inputFont1 = localStorage.getItem("inputFont1", inputFont1);
  var inputFont2 = localStorage.getItem("inputFont2", inputFont2);

  if (conteudoAjusteCor) {
    document.getElementById("ajusteCor").innerHTML = conteudoAjusteCor;
  }
  if (conteudoFooterMain) {
    document.getElementById("footer-main").innerHTML = conteudoFooterMain;
  }
  if (inputFooter1) {
    document.getElementById("footer1").value = inputFooter1;
  }
  if (inputFooter2) {
    document.getElementById("footer2").value = inputFooter2;
  }
  if (inputFooterBG1) {
    document.getElementById("corBgFooter1").value = inputFooterBG1;
  }
  if (inputFooterBG2) {
    document.getElementById("corBgFooter2").value = inputFooterBG2;
  }
  if (inputFooterleet1) {
    document.getElementById("corLetFooter1").value = inputFooterleet1;
  }
  if (inputFooterleet2) {
    document.getElementById("corLetFooter2").value = inputFooterleet2;
  }
  if (inputFont1) {
    document.getElementById("font1").value = inputFont1;
  }
  if (inputFont2) {
    document.getElementById("font2").value = inputFont2;
  }
}

function delCookie() {
  alert('As alterações foram limpas');
  localStorage.clear();
  location.reload();
}

//===========================================================================
// function salvarPaginaNoLocalStorage() {
//   var footer = document.getElementById('ajusteCor');
//   var informacoesPagina = {
//     titulo: document.title,
//     // conteudo: footer
//     conteudo: document.body.innerHTML,
//     rodape: footer
//   };
//   localStorage.setItem("pagina", JSON.stringify(informacoesPagina));

//   var dados = localStorage.getItem("dados") || '{}';
//   var dadosObjeto = JSON.parse(dados);
//   localStorage.setItem("dados", JSON.stringify(dadosObjeto));
// }

// function restaurarPaginaDoLocalStorage() {
//   var footer = document.getElementById('ajusteCor').innerHTML;
//   var informacoesString = localStorage.getItem("pagina");

//   if (informacoesString) {
//     var informacoesPagina = JSON.parse(informacoesString);

//     document.title = informacoesPagina.titulo;
//     document.body.innerHTML = informacoesPagina.conteudo;
//   }
// }

// restaurarPaginaDoLocalStorage();



