let numerosSorteados = [];
let quantidade = 0;
let minimo = 0;
let maximo = 0;

function sortear(){
    quantidade = document.getElementById('quantidade').value;
    minimo = document.getElementById('de').value;
    maximo = document.getElementById('ate').value;
    let numeroGerado = 0;
    let limite = 0;
    while (limite < quantidade){
        numeroGerado = (Math.floor(Math.random() * (maximo - minimo + 1) ) + minimo);
        if (numerosSorteados.includes(numeroGerado)){
            continue;
        } else {
        numerosSorteados.push(numeroGerado);
        limite++;
        }
    }
    document.getElementById("resultado").innerHTML = `Números sorteados:  ${numerosSorteados}`;
    document.getElementById('resultado').className = "texto__paragrafo";
    document.getElementById('btn-sortear').className = "container__botao-desabilitado";
    document.getElementById('btn-reiniciar').className = "container__botao";
}


function reiniciar(){
    quantidade = document.getElementById('quantidade').value = '';
    minimo = document.getElementById('de').value = '';
    maximo = document.getElementById('ate').value = '';
    document.getElementById("resultado").innerHTML = 'Números sorteados:  nenhum até agora';
    document.getElementById('btn-sortear').className = "container__botao";
    document.getElementById('btn-reiniciar').className = "container__botao-desabilitado";
}

