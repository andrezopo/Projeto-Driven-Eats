let contagemComida = 0;
let contagemBebida = 0;
let contagemSobremesa = 0;
let contagemSelecionados = 0;
let precoComida = 0;
let precoBebida = 0;
let precoSobremesa = 0;
function selecionarComida(item) {
    for (i = 1; i <= 4; i++) {
        document.getElementById('comida' + i).classList.remove('selecionado')
        document.getElementById('vetor-comida' + i).classList.add('invisivel')
    }
    item.classList.add('selecionado')
    document.getElementById('vetor-' + item.id).classList.remove('invisivel')
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
    contagemSobremesa = 1;
    contagemSelecionados = (contagemComida + contagemBebida + contagemSobremesa);
    if (contagemSelecionados === 3) {
        document.getElementById('falta-selecionar').classList.add('tudo-selecionado')
        document.getElementById('fechar-pedido').classList.add('pedido-fechado')
    }
}
let mensagem = "Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ " + (precoComida + precoBebida + precoSobremesa);
let mensagemPronta = encodeURIComponent(mensagem);
function fazerPedido() {
    alert(mensagemPronta)
    window.open("https://wa.me/5519998765432?text=" + mensagemPronta)
}

