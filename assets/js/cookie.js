// Função para obter o valor de um cookie existente
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
  
  // Função para salvar as informações no cookie
  function salvarInformacoesNoCookie() {
    // Obtenha as informações que deseja salvar
    var informacoes = {
      exemplo: "Valor de exemplo",
      // Adicione aqui as informações que você deseja armazenar
    };
  
    // Converta as informações para uma string JSON
    var informacoesString = JSON.stringify(informacoes);
  
    // Defina o cookie com as informações
    document.cookie = "informacoes=" + encodeURIComponent(informacoesString) + "; expires=DataDeExpiracao; path=/";
  }
  
  // Função para restaurar as informações do cookie
  function restaurarInformacoesDoCookie() {
    // Obtenha o valor do cookie
    var cookieValor = getCookie("informacoes");
  
    if (cookieValor) {
      // Decode e parse o valor do cookie para obter as informações
      var informacoesString = decodeURIComponent(cookieValor);
      var informacoes = JSON.parse(informacoesString);
  
      // Use as informações restauradas para construir o site
      // Exemplo: Alterar o conteúdo de um elemento no HTML
      document.getElementById("exemploElemento").textContent = informacoes.exemplo;
    }
  }
  
  // Exemplo de uso
  restaurarInformacoesDoCookie();
  