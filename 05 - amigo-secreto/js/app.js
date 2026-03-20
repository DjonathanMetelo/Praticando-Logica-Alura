let amigo = document.getElementById('nome-amigo');
let listaCampo = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');
let listaAmigos = [];
let posicao = 0;

function adicionar(){
    if (listaAmigos.includes(amigo.value)){
        alert('nome ja inserido')
    } else{
        listaAmigos[posicao] = amigo.value;
        listaCampo.innerHTML = listaAmigos.join(", ");
        posicao++
    }
    amigo.value = '';
}

function sortear(){ 
    let listaNumerosSorteados = [];
    for (let i = 0; i < listaAmigos.length;) {
        let numeroSorteado = Math.floor(Math.random() * listaAmigos.length);
        if (listaNumerosSorteados.includes(numeroSorteado) == false && numeroSorteado != i){    
            listaNumerosSorteados[i] = numeroSorteado;
            listaSorteio.innerHTML += `${listaAmigos[i]} -> ${listaAmigos[numeroSorteado]}<br>`;  
            console.log(`${listaAmigos[i]} -> ${listaAmigos[numeroSorteado]}`);
            i++;
        }
    }
}

function reiniciar(){ 
    listaCampo.innerHTML = '';
    listaSorteio.innerHTML = '';
}