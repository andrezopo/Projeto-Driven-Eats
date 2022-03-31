let contagemSelecionados = 0;
function selecionarComida(item){
    item.classList.add('selecionado')
    var comida = document.getElementsByClassName('comida')
    alert(comida)
    contagemSelecionados += 1
}
function selecionarBebida(item){
    item.classList.add('selecionado')
    contagemSelecionados += 1
}
function selecionarSobremesa(item){
    item.classList.add('selecionado')
    contagemSelecionados += 1
}
function tudoSelecionado(item){
    if (contagemSelecionados === 3){
        item.classList.add('tudo-selecionado')
    }
}

