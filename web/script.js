const uri = './assets/produtos.json';
var produtos = [];

// Carrega os dados do Mockup
fetch(uri)
    .then(resp => resp.json())
    .then(resp => { produtos = resp; })
    .then(() => mostrarCards());

function mostrarCards() {
    const main = document.querySelector('main');
    produtos.forEach((p, index) => {
        main.innerHTML += `
        <div class="card">
            <h3>${p.produto}</h3>
            <img src="${p.imagem}" alt="${p.produto}" id="imagem-${index}">
            <p>Preço: ${p.preco}</p>
            <p>Descrição: ${p.descricao}</p>
            <button id="detalhes-${index}">Detalhes</button>
        </div>
        `;
    });

    // Adiciona evento aos botões "Detalhes"
    produtos.forEach((p, index) => {
        const botao = document.getElementById(`detalhes-${index}`);
        botao.addEventListener('click', () => exibirDetalhes(p, index));
    });
}

function exibirDetalhes(produto, index) {
    const conteudo = document.getElementById('conteudo');
    conteudo.innerHTML = `
        <p>${produto.descricao}</p>
        <p>Preço:</p> R$ ${produto.preco}</p>
        <img src="${produto.imagem}">
    `;
    const detalhes = document.getElementById('detalhes');
    detalhes.classList.remove('oculto');
}

function ampliarImagem(imagem,) {
    const conteudo = document.getElementById('conteudo');
    conteudo.innerHTML = `
        <img src="${imagem}">
    `;
}

function reverterDetalhes() {
    const detalhes = document.getElementById('detalhes');
    detalhes.classList.add('oculto');
}