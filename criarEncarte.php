<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style_model.css">
    <title>Encarte</title>
</head>
<body>
    <section>
    </section>
    <div id="ajusteEncarte">
            <!-- <h2>ADICIONAR ENCARTE</h2><br><hr><br>
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
                <h3>PREÇO</h3><br>
                <input type="number" id="valorPreco" required>
            </div>
            <div id="formPreco">
                <h3>Unidade,Kg, Litros...</h3><br>
                <input type="text" id="formProd" required>
            </div>
        </div>
        <div>
            <button onclick="addEncarte(event)" id="btn-enc" data-id="${a}" data-item${a+1}="${item}">ENVIAR</button>
        </div> -->
    </div>

    <button onclick="print()">SALVAR</button>
    <main>
        <div id="header-main">
            <label for="file-header" onclick="addHeader()" id="display-header">+</label>
                <input type="file" id="file-header" style="display:none">
        </div>

        <div class="container" id="container">
            <div id="view-encarte" class="count-encarte">

                <!-- <div id="encarte-main" class="view" data-item1="0" data-id="0">
                    <label for="" onclick="abrirAjuste(event)" class="display-encarte" data-id="0" data-item1="0" style="display: none;">+</label>
                    <div id="nomeProduto">Papel Hegienico</div>
                    <div id="valorEnc">
                        <div> 12,00 <h6>kg</h6> </div>
                        <img src="assets/image/bgPrecoOk.png">
                    </div>
                    <img src="assets/image/Produtos/7.jpg">
                </div>

                <div id="encarte-main" class="view" data-item1="0" data-id="0">
                    <label for="" onclick="abrirAjuste(event)" class="display-encarte" data-id="0" data-item1="0" style="display: none;">+</label>
                    <div id="nomeProduto">Papel Hegienico</div>
                    <div id="valorEnc">
                        <div> 12,00 <h6>kg</h6> </div>
                        <img src="assets/image/bgPrecoOk.png">
                    </div>
                    <img src="assets/image/Produtos/1.jpg">
                </div>

                <div id="encarte-main" class="view" data-item1="0" data-id="0">
                    <label for="" onclick="abrirAjuste(event)" class="display-encarte" data-id="0" data-item1="0" style="display: none;">+</label>
                    <div id="nomeProduto">Papel Hegienico</div>
                    <div id="valorEnc">
                        <div> 12,00 <h6>kg</h6> </div>
                        <img src="assets/image/bgPrecoOk.png">
                    </div>
                    <img src="assets/image/Produtos/1.jpg">
                </div> -->
            </div>

            <div id="view-encarte" class="count-encarte">
            </div>

            <div id="view-encarte" class="count-encarte">
            </div>
            
        </div>

        <div id="footer-main">
            <textarea name="" id="footerArea" cols="30" rows="10"></textarea>
            
            <div class="addFooter" onclick="ajusteCor()">Enviar</div>
        </div>
        <div id="ajusteCor">
            <fieldset><legend>Ajuste De Cores do Rodapé</legend>
                <div>Cor de fundo</div>
                <input type="color" name="" id="corBgFooter"><br>
                <div>Cor das letras</div>
                <input type="color" name="" id="corLetFooter">
            </fieldset>
        </div>
        
    </main>
    
    <div class="addBox">
        <div class="add" onclick="addBox(event)" data-id="0">+</div>
        <div class="add" onclick="addBox(event)" data-id="1">+</div>
        <div class="add" onclick="addBox(event)" data-id="2">+</div>
    </div>
    <div class="removeBox">
        <div class="remove" onclick="removeBox(event)" data-id="0">x</div>
        <div class="remove" onclick="removeBox(event)" data-id="1">x</div>
        <div class="remove" onclick="removeBox(event)" data-id="2">x</div>
    </div>
    <script src="assets/js/script_model.js"></script>
    
    <script>
        function print(){
            <?php
                $params = http_build_query(array(
                    "access_key" => "e7fd9d999f9c4ab2854f3aabcfff36ae",
                    "url" => "https://robson-magalhaes.github.io/Criar_encarte_basico/",
                    "element" => "main"
                ));

                $image_data = file_get_contents("https://api.apiflash.com/v1/urltoimage?" . $params);
                file_put_contents("screenshot.jpeg", $image_data);
                ?>
        }
    </script>
</body>
</html>
