window.onload = function(){
    const listaDeTarefas = localStorage.getItem("tarefas")

    if(listaDeTarefas == null){
        const listaVazia = []
        // stringfy converter um objeto em texto
        localStorage.setItem("tarefas", JSON.stringify(listaVazia))

    }
    atualizarListaDeTarefas()
}

function atualizarListaDeTarefas(){
    // buscar a lista no local storage
    const listaDeTarefas = localStorage.getItem("tarefas")
    // converter pra objeto
    const lista = JSON.parse(listaDeTarefas)
    // preencher tags html
    const listaUl = document.getElementById("tarefas")
    listaUl.innerHTML = ""

    lista.forEach(function(item){

        const itemDaLista = document.createElement("li")
        itemDaLista.innerText = item
        itemDaLista.addEventListener("dblclick", function(event){
            removerItem(event.target.innerText)
        })

        listaUl.appendChild(itemDaLista)
    })
}

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()

    const input = document.getElementById("tarefa")

    // buscar a lista no local storage
    const listaDeTarefas = localStorage.getItem("tarefas")
    // converter pra objeto
    const lista = JSON.parse(listaDeTarefas)

    lista.push(input.value)

    localStorage.setItem("tarefas", JSON.stringify(lista))

    atualizarListaDeTarefas()
})

function removerItem(itemParaExcluir){
    // buscar a lista no local storage
    const listaDeTarefas = localStorage.getItem("tarefas")
    // converter pra objeto
    const lista = JSON.parse(listaDeTarefas)

    const novaLista = lista.filter(function(item) {
        return item != itemParaExcluir
    })

    localStorage.setItem("tarefas", JSON.stringify(novaLista))

    atualizarListaDeTarefas()
}


// Criar o evento de remover item da lista ao clicar duas vezes.
// https://github.com/univas/2025-frontend