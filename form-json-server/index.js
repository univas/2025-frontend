window.onload = function(){
    atualizarListaDeTarefas()
}

function atualizarListaDeTarefas(){
    
    const lista = []
    const listaUl = document.getElementById("tarefas")

    // get
    fetch("http://localhost:3000/tarefas")
        .then(function (resposta){
            return resposta.json()
        })
        .then(function(dado){
            
            listaUl.innerHTML = ""
            dado.forEach(function(item){
        
                const itemDaLista = document.createElement("li")
                itemDaLista.innerText = item.titulo
                itemDaLista.addEventListener("dblclick", function(event){
                    removerItem(item.id)
                })
        
                listaUl.appendChild(itemDaLista)
            })
        })

}

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()

    const input = document.getElementById("tarefa")

    fetch("http://localhost:3000/tarefas", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ titulo: input.value })
    }).then(function (resposta){
        return resposta.json()
    })
    .then(function(dado){
        console.log(dado)
        alert("Tarefa salva com sucesso!")
    })

    
    atualizarListaDeTarefas()
})

function removerItem(itemParaExcluir){
   
    fetch("http://localhost:3000/tarefas/"+itemParaExcluir, {
        method: "DELETE"
    }).then(function(response){
        alert("Excluído com sucesso!")
        atualizarListaDeTarefas()
    })

    
}



// Atividade
// Ciar um botão com um V ao lado de cada tarefa
// ao clicar deve fazer uma requisição put para colocar um campo estado com conteúdo "Concluído"
// na função de atualizar listsa de tarefas, quando tiver algum estado concluído, deve pintar a cor do texto de verde