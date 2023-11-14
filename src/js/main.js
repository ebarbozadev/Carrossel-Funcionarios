let posicao = 0;
let funcionarios = document.querySelectorAll('.funcionario');
let botaoVoltar = document.querySelector('.fa-arrow-left');
let botaoAvancar = document.querySelector('.fa-arrow-right');
let botaoAleatorio = document.querySelector('button');

botaoAleatorio.onclick = () => {
    removerAtivo();

    posicao = Math.floor(Math.random() * (funcionarios.length - 1));
    funcionarios[posicao].classList.add('ativo');
}

botaoAvancar.onclick = () => {
    removerAtivo();

    if (posicao < funcionarios.length - 1) {
        posicao++;
        funcionarios[posicao].classList.add('ativo');
    } else {
        posicao = 0;
        funcionarios[posicao].classList.add('ativo'); 
    }
}

botaoVoltar.onclick = () => {
    removerAtivo();

    if (posicao > 0) {
        posicao--;
        funcionarios[posicao].classList.add('ativo');
    } else {
        posicao = funcionarios.length - 1;
        funcionarios[posicao].classList.add('ativo'); 
    }
}

function removerAtivo() {
    for (funcionario of funcionarios) {
        funcionario.classList.remove('ativo');
    }

    
}