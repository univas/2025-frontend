// primeiro seletor ID
const elementoTitulo = document.getElementById("titulo")

console.log(elementoTitulo)

elementoTitulo.style.color = "white"

// inner text, escreve texto na tela
elementoTitulo.innerText = "<b>Título</b> de uma página bem dinâmica"

// inner html, criar elementos html na tela dinamicamente
elementoTitulo.innerHTML = "<i>Título</i> de uma página bem dinâmica"

const produtos = ["Geladeira", "Fogão", "Sofá"]

const divProdutos = document.getElementById("produtos")
produtos.forEach(produto => {
    const elementoProduto = document.createElement("p")
    elementoProduto.innerText = produto
    elementoProduto.style.color = 'green'

    divProdutos.appendChild(elementoProduto)
})