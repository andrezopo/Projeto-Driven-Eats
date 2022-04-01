let contagemComida = 0;
let contagemBebida = 0;
let contagemSobremesa = 0;
let contagemSelecionados = 0;
let precoComida = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let preco = 0;
function selecionarComida(item) {
    for (i = 1; i <= 4; i++) {
        document.getElementById('comida' + i).classList.remove('selecionado')
        document.getElementById('vetor-comida' + i).classList.add('invisivel')
    }
    item.classList.add('selecionado')
    document.getElementById('vetor-' + item.id).classList.remove('invisivel')
    precoComida = document.getElementById('preco-' + item.id).textContent
    precoComida = Number(precoComida.substr(4,5).replace(',','.'))

    preco = (precoBebida + precoComida + precoSobremesa).toFixed(2)
    contagemComida = 1;
    contagemSelecionados = (contagemComida + contagemBebida + contagemSobremesa);
    if (contagemSelecionados === 3) {
        document.getElementById('falta-selecionar').classList.add('tudo-selecionado')
        document.getElementById('fechar-pedido').classList.add('pedido-fechado')
    }

}
function selecionarBebida(item) {
    for (i = 1; i <= 4; i++) {
        document.getElementById('bebida' + i).classList.remove('selecionado')
        document.getElementById('vetor-bebida' + i).classList.add('invisivel')
    }
    item.classList.add('selecionado')
    document.getElementById('vetor-' + item.id).classList.remove('invisivel')
    precoBebida = document.getElementById('preco-' + item.id).textContent
    precoBebida = Number(precoBebida.substr(4,5).replace(',','.'))

    preco = (precoBebida + precoComida + precoSobremesa).toFixed(2)
    contagemBebida = 1;
    contagemSelecionados = (contagemComida + contagemBebida + contagemSobremesa);
    if (contagemSelecionados === 3) {
        document.getElementById('falta-selecionar').classList.add('tudo-selecionado')
        document.getElementById('fechar-pedido').classList.add('pedido-fechado')
    }
}
function selecionarSobremesa(item) {
    for (i = 1; i <= 4; i++) {

        document.getElementById('sobremesa' + i).classList.remove('selecionado')

        document.getElementById('vetor-sobremesa' + i).classList.add('invisivel')
    }
    item.classList.add('selecionado')

    document.getElementById('vetor-' + item.id).classList.remove('invisivel')

    precoSobremesa = document.getElementById('preco-' + item.id).textContent

    precoSobremesa = Number(precoSobremesa.substr(4,5).replace(',','.'))

    preco = (precoBebida + precoComida + precoSobremesa).toFixed(2)

    contagemSobremesa = 1;

    contagemSelecionados = (contagemComida + contagemBebida + contagemSobremesa);

    if (contagemSelecionados === 3) {

        document.getElementById('falta-selecionar').classList.add('tudo-selecionado')

        document.getElementById('fechar-pedido').classList.add('pedido-fechado')
    }
}

let mensagem = "";

function confirmarPedido(){
    let elemento = document.querySelector(".modal");
    elemento.classList.remove('invisivel');
    document.querySelector(".primeiro-preco").innerHTML = "R$ " + precoComida.toFixed(2).replace('.',',');
    document.querySelector(".segundo-preco").innerHTML = "R$ " + precoBebida.toFixed(2).replace('.',',');
    document.querySelector(".terceiro-preco").innerHTML = "R$ " + precoSobremesa.toFixed(2).replace('.',',');
    document.querySelector(".preco-total").innerHTML = "R$ " + preco.replace('.',',');
}
function cancelarConfirmacao(){
    let elemento = document.querySelector(".modal");
    elemento.classList.add('invisivel');
}

function fazerPedido() {

    let nome = prompt('Qual o seu nome?');

    let endereco = prompt('Qual o endereço para entrega?')

    mensagem = "Olá, gostaria de fazer o *pedido*:\n- *Prato*: Frango Yin Yang\n- *Bebida*: Coquinha Gelada\n- *Sobremesa*: Pudim\n*Total*: R$ *" + preco +"*\n\n*Nome*: " + nome + "\n*Endereço*: " + endereco ;

    let mensagemPronta = encodeURIComponent(mensagem);

    window.open("https://wa.me/5519998765432?text=" + mensagemPronta)

    console.log("https://wa.me/5519982561155?text=" + mensagemPronta)
}

