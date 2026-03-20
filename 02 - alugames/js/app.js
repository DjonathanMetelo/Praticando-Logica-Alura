function alterarStatus(numero){
    let fotoJogo = document.querySelector(`#game-${numero} .dashboard__item__img`);
    let botaoJogo = document.querySelector(`#game-${numero} .dashboard__item__button`);
    if (botaoJogo.innerHTML == 'Alugar'){
        console.log('verdadeiro');
        fotoJogo.classList.add('dashboard__item__img--rented');
        botaoJogo.innerHTML = 'Devolver';
        botaoJogo.classList.add('dashboard__item__button--return');
    } else if (botaoJogo.innerHTML == 'Devolver'){
        console.log('falso');
        fotoJogo.classList.remove('dashboard__item__img--rented');
        botaoJogo.innerHTML = 'Alugar';
        botaoJogo.classList.remove('dashboard__item__button--return');
    }
    
}
