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
function salvarPaginaNoLocalStorage(count, valorVariavel) {
  var informacoesPagina = {
    titulo: document.title,
    conteudo: document.body.innerHTML,
  };
  localStorage.setItem("pagina", JSON.stringify(informacoesPagina));

  var dados = localStorage.getItem("dados") || '{}';
  var dadosObjeto = JSON.parse(dados);
  dadosObjeto[count] = valorVariavel;
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

var minhaVariavel = {'linha1':0, 'linha2': 0,'linha3':0};


document.addEventListener("click", function() {
  console.log('valor da variavel:'+ count['linha1']);
  
 salvarPaginaNoLocalStorage(count, valorVariavel);
});

function delCookie() {
alert('As alterações foram limpas');
localStorage.clear();
location.reload();
}


restaurarPaginaDoLocalStorage();
  

//PARECE QUE VAI DAR CERTO AQUI

// let count = {'linha1':0, 'linha2': 0,'linha3':0};

function salvarVariavelNoLocalStorage(count, valorVariavel) {
  localStorage.setItem(count, JSON.stringify(valorVariavel));
  salvarVariavelNoLocalStorage(count);
}

// Exemplo de uso