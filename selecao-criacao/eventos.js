const titulo = document.getElementById("titulo-principal")

titulo.addEventListener("click", function(event){
    // console.log("Usuário clicou no título agora!") // Função executada quando clicar no elemento

    if(event.target.style.color == "green"){
        event.target.style.color = "red"
    }else{
        event.target.style.color = "green"
    }

    let novoTexto = ""

    for(let i = 0; i < event.target.innerText.length-1; i++){
        novoTexto += event.target.innerText[i]
    }

    event.target.innerText = novoTexto
})


const produtosHTML = document.getElementsByClassName("produto")

const produtos = Array.from(produtosHTML)

produtos.forEach(function(produto){
    produto.addEventListener("dblclick", function(event){
        event.target.closest("tr").remove()
        calculaEstoqueTotalEMostraNaTela()
    })
})

const botoesMaisHTML = document.getElementsByClassName("botao-mais")

const botoesMais = Array.from(botoesMaisHTML)
botoesMais.forEach(function(botao){
    botao.addEventListener("click", function(event){
        const linha = event.target.closest("tr")
        const td = linha.children[2]
        
        let valorAtual = parseInt(td.innerText)

        td.innerText = ++valorAtual
        calculaEstoqueTotalEMostraNaTela()
    })
})


const botoesMenosHTML = document.getElementsByClassName("botao-menos")

const botoesMenos = Array.from(botoesMenosHTML)
botoesMenos.forEach(function(botao){
    botao.addEventListener("click", function(event){
        const linha = event.target.closest("tr")
        const td = linha.children[2]
        
        let valorAtual = parseInt(td.innerText)

        td.innerText = --valorAtual
        calculaEstoqueTotalEMostraNaTela()
    })
})