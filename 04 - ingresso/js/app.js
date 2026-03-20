function comprar(){
    let ingresso = document.getElementById('tipo-ingresso').value;
    let cadeira = (ingresso == 'inferior' || ingresso == 'superior') ?  " Cadeira " : " ";
    let quantidade = document.getElementById('qtd');
    if (parseInt(quantidade.value) > 10){
        alert('Apenas 10 ingressos permitido por pessoa');
    } else{
        let vagas = document.getElementById(`qtd-${ingresso}`).innerHTML;
        if (parseInt(vagas) == 0){
            alert(`Nenhum ngresso disponivel em${cadeira}${ingresso}`);
        }else if(parseInt(quantidade.value) > parseInt(vagas)){
            alert(`Apenas ${vagas} disponiveis ingressos disponiveis em${cadeira}${ingresso}!`);
        }else{
            document.getElementById(`qtd-${ingresso}`).innerHTML = parseInt(vagas) - parseInt(quantidade.value);
        }
    }
    quantidade.value = '';
}