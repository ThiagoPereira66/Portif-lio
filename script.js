const abrirModal = document.querySelector('#contato')
const modal = document.querySelector('dialog')
const fecharModal = document.querySelector('#fechar')
const enviarEFecharModal = document.querySelector('#enviar')



abrirModal.onclick = function () {
    modal.showModal()
}

fecharModal.onclick = function () {
    modal.close()
}



function enviarWatapp() {
    let numero = '+5534988870598'

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let number = document.getElementById('telefone').value
    let assunto = document.getElementById('assunto').value

    let url = 'https://wa.me/' + numero + '?text='
        + "Nome : " + nome + "%0a"
        + "E-mail : " + email + "%0a"
        + "Numero : " + number + "%0a"
        + "Assunto : " + assunto + "%0a";

    window.open(url, '_blanck').focus();


}




// cards de projetos

const card = [
    {
        id: '0',
        nome: 'CLIMA',
        imagem: './imagem/clima.png',
        descricao: 'Projeto criado como aprendizado no curso FRONT-END (DEV CLUB), usando as tecnologias HTML | CSS | JAVASCRIPT.',
        tecnologia1: './imagem/html.png',
        tecnologia2: './imagem/css.svg',
        tecnologia3: './imagem/javascript.svg',
        linkPreviw:'https://thiagopereira66.github.io/clima/',
        linkRepositorio:'https://github.com/ThiagoPereira66/clima'
    },

    {
        id: '1',
        nome: 'CRONÔMETRO',
        imagem: './imagem/cronômetro.png',
        descricao: 'Criei este projeto para treinar meus conhecimentos nas tecnologias HTML | CSS | JAVASCRIPT, com auxílio de vídeo aulas.',
        tecnologia1: './imagem/html.png',
        tecnologia2: './imagem/css.svg',
        tecnologia3: './imagem/javascript.svg',
        linkPreviw:'https://thiagopereira66.github.io/Cron-nmetro/',
        linkRepositorio:'https://github.com/ThiagoPereira66/Cron-nmetro'
    },

    {
        id: '2',
        nome: 'POKEDEX',
        imagem: './imagem/pokedex.png',
        descricao: 'Projeto criado através do BOOTCAMP ORANG-TECH da (DIO), focado na parte de FRONT-END e consumo de API.',
        tecnologia1: './imagem/html.png',
        tecnologia2: './imagem/css.svg',
        tecnologia3: './imagem/javascript.svg',
        linkPreviw:'https://thiagopereira66.github.io/pokedex/',
        linkRepositorio:'https://github.com/ThiagoPereira66/pokedex'
    },

    {
        id: '3',
        nome: 'RELOGIO',
        imagem: './imagem/relogio.png',
        descricao: 'Criei este projeto para treinar meus conhecimentos nas tecnologias HTML | CSS | JAVASCRIPT, com auxílio de vídeo aulas.',
        tecnologia1: './imagem/html.png',
        tecnologia2: './imagem/css.svg',
        tecnologia3: './imagem/javascript.svg',
        linkPreviw:'https://thiagopereira66.github.io/Relogio/',
        linkRepositorio:'https://github.com/ThiagoPereira66/Relogio'
    },

    {
        id: '4',
        nome: 'TODO-LIST',
        imagem: './imagem/todo-list.png',
        descricao: 'Todo-list foi criado através das aulas de REACT (DEV CLUB)',
        tecnologia1: './imagem/react.jpg',
        tecnologia2: './imagem/css.svg',
        tecnologia3: './imagem/javascript.svg',
        linkPreviw:'https://thiagopereira66.github.io/todo-list/ ',
        linkRepositorio:'https://github.com/ThiagoPereira66/todo-list'
    }
];

for (const cartoes of card) {
const cardsProjetos = ` 
            
                <div class="card">
                    <div class="imagem">
                        <img src='${cartoes.imagem}' alt="imagem-card">
                    </div>
                    <div class="descricao">
                        <div class="card-titulo" style="text-align: center;">
                            <h3 style="font-size: 1.5vw; color: azure; font-weight: bold;">${cartoes.nome}</h3>
                        </div>
                        <p>${cartoes.descricao}</p>
                        <div class='tec'>
                            <img src='${cartoes.tecnologia1}' alt='imagens-das-tecnologias' style='width: 2vw;'>
                            <img src='${cartoes.tecnologia2}' alt='imagens-das-tecnologias' style='width: 2vw;'>
                            <img src='${cartoes.tecnologia3}' alt='imagens-das-tecnologias' style='width: 2vw;'> 
                        </div>
                    </div>
                    <div class="botao-card">
                        <a href='${cartoes.linkPreviw}' target='blank'><button type="button">conferir</button></a>
                        <a href='${cartoes.linkRepositorio}' target='blank'><button type="button">repositorio</button></a>
                    </div>
                </div>
            </div>`
document.querySelector('#post-cards').innerHTML += cardsProjetos
}