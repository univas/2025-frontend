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