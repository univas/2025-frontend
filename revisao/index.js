window.onload = function(){
    const animais = localStorage.getItem("animais")

    if(animais == null){
        localStorage.setItem("animais", JSON.stringify([
            {
                nome: "Crocodilo",
                patas: 4,
                pais: "Egito"
            }
        ]))
    }

    montarListaDeAnimais()
}

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
    const nomeErro = document.getElementById("nomeErro")
    const patasErro = document.getElementById("patasErro")
    const paisErro = document.getElementById("paisErro")

    nomeErro.innerText = ""
    patasErro.innerText = ""
    paisErro.innerText = ""

    const nomeInput = document.getElementById("nome")
    const patasInput = document.getElementById("patas")
    const paisInput = document.getElementById("pais")

    if(nomeInput.value == ""){
        
        nomeErro.innerText = "Nome é obrigatório"
        return false
    }

    if(patasInput.value == "" || patasInput.value < 0){
        
        patasErro.innerText = "Quantidade de patas é obrigatório e deve ser maior ou igual a zero!"
        return false
    }

    if(paisInput.value == ""){
        
        paisErro.innerText = "País é obrigatório!"
        return false
    }

    const animal = {
        nome: nomeInput.value,
        patas: patasInput.value,
        pais: paisInput.value
    }

    const animais = localStorage.getItem("animais")
    const animaisArray = JSON.parse(animais)

    animaisArray.push(animal)

    localStorage.setItem("animais", JSON.stringify(animaisArray))

    montarListaDeAnimais()
})

function montarListaDeAnimais(){
    const animais = localStorage.getItem("animais") // devolve string

    const animaisArray = JSON.parse(animais)

    const tbody = document.getElementById("animais")
    tbody.innerHTML = ""

    animaisArray.forEach(function(animal){

        const tr = document.createElement("tr")

        const td1 = document.createElement("td")
        td1.innerText = animal.nome

        const td2 = document.createElement("td")
        td2.innerText = animal.patas

        const td3 = document.createElement("td")
        td3.innerText = animal.pais

        const td4 = document.createElement("td")
        const botao = document.createElement("button")
        botao.innerText = "Excluir"
        botao.addEventListener("click", function(){
            excluirAnimal(animal.nome)
        })
        td4.append(botao)

        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)

        
        tbody.append(tr)
    })
}

function excluirAnimal(nome){
    const animais = localStorage.getItem("animais")
    const animaisArray = JSON.parse(animais)

    const novoAnimais = animaisArray.filter(function(animal){
        return animal.nome != nome // aqui precisamos pensar em quais queremos manter e nao naqueles que queremos excluir, por isso o != e nao o ==
    })

    localStorage.setItem("animais", JSON.stringify(novoAnimais))

    montarListaDeAnimais()
}