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
function salvarPaginaNoLocalStorage(cont) {
  var informacoesPagina = {
    titulo: document.title,
    conteudo: document.body.innerHTML,
    dadosJS: document.scripts,
  };
  localStorage.setItem("pagina", JSON.stringify(informacoesPagina));

  var dados = localStorage.getItem("dados") || '{}';
  var dadosObjeto = JSON.parse(dados);
  dadosObjeto[cont] = valorVariavel;
  localStorage.setItem("dados", JSON.stringify(dadosObjeto));
}

function restaurarPaginaDoLocalStorage() {
  var informacoesString = localStorage.getItem("pagina");

  if (informacoesString) {
    var informacoesPagina = JSON.parse(informacoesString);

    document.title = informacoesPagina.titulo;
    document.body.innerHTML = informacoesPagina.conteudo;
  }
}

//document.addEventListener("change", function() {
//  salvarPaginaNoLocalStorage();
//});

function delCookie() {
alert('As alterações foram limpas');
localStorage.clear();
location.reload();
}


restaurarPaginaDoLocalStorage();
  

//PARECE QUE VAI DAR CERTO AQUI


// function salvarVariavelNoLocalStorage(nomeVariavel, valorVariavel) {
//   localStorage.setItem(nomeVariavel, JSON.stringify(valorVariavel));
// }

// // Exemplo de uso
// var minhaVariavel = "Valor inicial da variável";
// salvarVariavelNoLocalStorage("minhaVariavel", minhaVariavel);

// // Mais tarde, quando a variável for alterada
// minhaVariavel = "Novo valor da variável";
// salvarVariavelNoLocalStorage("minhaVariavel", minhaVariavel);