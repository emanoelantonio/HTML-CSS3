window.addEventListener('load',main,false)
//Após carregar a pág. executa a função main.
        function main() {
            var sub = document.getElementById('sub')
            sub.addEventListener('mouseover', aviso, false)
//Ao passar o mouse pelo botão um aviso é mostrado.
            function aviso() {
                alert('Aqui confirme a sua compra!')
//Mensagem do aviso.
                sub.removeEventListener('mouseover', aviso, false)
//Remove o aviso para que não seja mostrado outa vez.
            }
        }
        function finalizarCompra(e) {
            e.preventDefault()
//Impede o formulário de ser atualizado.
            var select = document.getElementById("mySelect")
            var info = document.getElementById("info")
            info.innerHTML += '<h3>Produtos:</h3>';
            var options = select.selectedOptions;
            if (options.length > 0) {
                var table = document.createElement('table');
                for (var i = 0; i < options.length; i++) {
                    var tr = document.createElement('tr');
                    var td = document.createElement('td');
                    var texto = document.createTextNode(options[i].value);
                    td.appendChild(texto);
                    tr.appendChild(td);
                    table.appendChild(tr);
                    
                }
                info.appendChild(table);
                table.setAttribute('border', '1');
            }
        }