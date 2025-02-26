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