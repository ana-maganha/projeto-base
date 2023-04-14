/////////////////////////////////////////////////////////atividade 3 - Lâmpada

function alterarLampada() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);
    let botao = document.getElementById('btnEnviar');

    if (arquivo == 'acesa.jpg' || arquivo == '')
        imagem.src = 'img/apagada.jpg';

    else
        imagem.src = 'img/acesa.jpg';

    if (botao.textContent == 'Acender' || botao.textContent == "") {
        botao.textContent = 'Apagar'
    }

    else {
        botao.textContent = 'Acender'
    }
}

///////////////////////////////////////////////////////////////atividade 1 - Formulário

function validarDados() {
    let data = frmRegistro.inData.value;
    let cliente = frmRegistro.inCli.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let produto = frmRegistro.inProd.value;
    let quantidade = frmRegistro.inQtd.value;
    let valorUnitario = frmRegistro.inVal.value;
    let erro = document.getElementById('mensagem-erro');
    erro.innerHTML='';
    erro.style.display='none';

    if (data.trim() == '') {
        erro.innerHTML='O campo data não pode ser vazio!';
        erro.style.display='block';
        frmRegistro.inData.focus()
        return false;
    }
    if (cliente.trim() == '') {
        erro.innerHTML='O campo cliente não pode ser vazio!';
        erro.style.display='block';
        frmRegistro.inCli.focus()
        return false;
    }
    if (telefone.trim() == '') {
        erro.innerHTML='O campo telefone não pode ser vazio!';
        erro.style.display='block';
        frmRegistro.inFone.focus() 
        return false;
    }
    if (email.trim() == '') {
        erro.innerHTML='O campo e-mail não pode ser vazio!';
        erro.style.display='block';
        frmRegistro.inMail.focus() 
        return false;
    }
    if (produto.trim() == '') {
        erro.innerHTML='O campo produto não pode ser vazio!';
        erro.style.display='block';
        frmRegistro.inProd.focus() 
        return false;
    }
    if (quantidade == '') {
        erro.innerHTML='O campo quantidade não pode ser vazio!';
        erro.style.display='block';
        frmRegistro.inQtd.focus()
        return false;
    }
    if (valorUnitario == '') {
        erro.innerHTML='O campo valor unitário não pode ser vazio!';
        erro.style.display='block';
        frmRegistro.inVal.focus()
        return false;
    }


    if (quantidade <= 0) {
        erro.innerHTML='Não pode haver quantidade negativa ou zero!';
        erro.style.display='block';
        frmRegistro.inQtd.focus() 
        return false;
    }
    if (valorUnitario <= 0) {
        erro.innerHTML='Não pode haver valor unitário negativo ou zero!';
        erro.style.display='block';
        frmRegistro.inVal.focus()
        return false;
    }


    if (cliente.trim().length < 5) {
        erro.innerHTML='O campo cliente deve conter pelo menos 5 caracteres!';
        erro.style.display='block';
        frmRegistro.inCli.focus()
        return false;
    }
    if (telefone.trim().length < 5) {
        erro.innerHTML='O campo telefone deve conter pelo menos 5 caracteres!';
        erro.style.display='block';
        frmRegistro.inFone.focus()
        return false;
    }
    if (email.trim().length < 5) {
        erro.innerHTML='O campo e-mail deve conter pelo menos 5 caracteres!';
        erro.style.display='block';
        frmRegistro.inMail.focus()
        return false;
    }
    if (produto.trim().length < 5) {
        erro.innerHTML='O campo produto deve conter pelo menos 5 caracteres!';
        erro.style.display='block';
        frmRegistro.inProd.focus()
        return false;
    }
    if (quantidade.trim().length < 5) {
        erro.innerHTML='O campo quantidade deve conter pelo menos 5 caracteres!';
        erro.style.display='block';
        frmRegistro.inQtd.focus()
        return false;
    }
    if (valorUnitario.trim().length < 5) {
        erro.innerHTML='O campo valor unitário deve conter pelo menos 5 caracteres!';
        erro.style.display='block';
        frmRegistro.inVal.focus()
        return false;
    }

}

//////////////////ATIVIDADE 4 - Calculadora de Desconto ///////////////////

function calcular(){

let valor = inValorPedido.value;
let percDesc = inPercDesc(valor);
let desc = inValDesc(valor);
let liquido = inValFinal(valor, percDesc);

document.getElementById ('inPercDesc').value = percDesc;
document.getElementById ('inValDesc').value = desc;
document.getElementById ('inValFinal').value = liquido;
}

function inValFinal(valorCompra, percDesconto) {
    let valorDesc = valorCompra * percDesconto / 100;
    let valLiq = valorCompra - valorDesc;
    return valLiq;
}

function inPercDesc(valorCompra) {
    let desconto = 0;

    if (valorCompra >= 500)
        desconto = 50 / 100;

    if (valorCompra >= 1000)
        desconto = 80 / 100;

    if (valorCompra >= 1500)
        desconto = 100 / 100;

    if (valorCompra >= 2000)
        desconto = 150 / 100;
    return desconto;
}

function inValDesc(valorCompra) {
    let desconto = 0;

    if (valorCompra >= 500)
        desconto = valorCompra * 0.5 / 100;

    if (valorCompra >= 1000)
        desconto = valorCompra * 0.8 / 100;

    if (valorCompra >= 1500)
        desconto = valorCompra * 1 / 100;

    if (valorCompra >= 2000)
        desconto = valorCompra * 1.5 / 100;
    return desconto;
}

/////////////////////ATIVIDADE 2////////////////////////////////////////

function gerarImagem(){
    let quantidade = document.getElementById('inQtdImg');
    let canvas = document.getElementById('canvas');
    let imagens = '<img src="img/logo.png" class="imagens"></img>'
    canvas.innerHTML = '';

    for(let i=0; i<quantidade.value; i++){
        canvas.innerHTML= canvas.innerHTML + imagens;
    }
}
