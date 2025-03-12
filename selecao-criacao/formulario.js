const formulario = document.getElementById("formulario-produto")

formulario.addEventListener("submit", function(event){
    event.preventDefault() // paralizou o comportamento padrão
    // e executou a lógica criada

    console.log("Enviou o formulário")
})

const nomeInput = document.getElementById("nome")

// evento change é lançado ao sair do campo que foi digitado
nomeInput.addEventListener("change", function(event){
    const conteudoDigitado = event.target.value

    const produtos = document.getElementsByClassName("produto-nome")
    const produtosArray = Array.from(produtos)

    const produtosExistentes = produtosArray.filter(function(elemento){
        return elemento.innerText == conteudoDigitado
    })

    const botaoAdicionar = document.getElementById("botao-adicionar")
    if(produtosExistentes.length > 0){
        botaoAdicionar.setAttribute("disabled", true)
    }else{
        // para habilitar o botao eu preciso remover a propriedade (atributo)
        // disabled, não basta colocar como falso
        botaoAdicionar.removeAttribute("disabled")
    }
})