let campoCarrinho = document.querySelector('#lista-produtos .carrinho__produtos__produto');
let somaCarrinho = 0;

function adicionar(){
    let produto = document.getElementById('produto').value;
    let qte = document.getElementById('quantidade');
    if (qte.value != 0){
        carrinho(produto, qte.value);
        qte.value = '';
    }
    somaCarrinho = campoCarrinho.innerHTML.matchAll(/R\$(\d+)/g).map(m => Number(m[1])).reduce((acc, val) => acc + val, 0);
    document.getElementById('valor-total').innerHTML = `R$ ${somaCarrinho}`
}

function limpar(){
    campoCarrinho.innerHTML = "";
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    document.getElementById('quantidade').value = 0;
    somaCarrinho = 0;
}

function carrinho (produto, qte){
    let itensCarrinho = campoCarrinho.innerHTML.split("<br>")
    let nomeProduto = produto.slice(0, produto.indexOf("-")).trim();
    let valorProduto = produto.slice(produto.indexOf("R$") + 2,);
    if(campoCarrinho.innerHTML.includes(nomeProduto)){
        campoCarrinho.innerHTML = "";
        for (let i = 0; i < itensCarrinho.length-1; i++) {
            if(itensCarrinho[i].includes(nomeProduto)){
                let qteOriginal = itensCarrinho[i].match(/>(\d)x</).map(m => Number(m[1]));
                let soma = parseInt(qte)+qteOriginal[0];
                itensCarrinho[i] = `<span class="texto-azul">${soma}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto*soma}</span>`;
                campoCarrinho.innerHTML += itensCarrinho[i] + '<br>';
            } else{
                campoCarrinho.innerHTML += itensCarrinho[i] + '<br>';
            }
        }
    }else{
        campoCarrinho.innerHTML += `<span class="texto-azul">${qte}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto*qte}</span><br>`;
    }
}