console.log("Deu Certo!!")

const menus = document.getElementsByClassName("item-menu")
// menus é um HTML Collection
console.log(menus)
console.log(menus[1])

// Para usar os métodos do Prototype Array
// preciso transformar a Collection em Array usando o 
// método from
const menusArray = Array.from(menus)

menusArray.forEach(function(menu){
    console.log(menu.innerHTML) // obtém a primeira tag abaixo no nó
    console.log(menu.innerText) // obtém o texto puro abaixo do nó, ignorando outros nós
})


function calculaEstoqueTotalEMostraNaTela(){
    // PASSO 01: Identificar onde estão os estoques
    const estoques = document.getElementsByClassName("produto-estoque")

    // PASSO 02: Somar todos os estoques
    const estoquesArray = Array.from(estoques)

    const estoqueTotal = estoquesArray.reduce(function(anterior, atual){
        return anterior + parseInt(atual.innerText)
    }, 0)

    // PASSO 03: Identificar onde vai o resultado
    const h2Resultado = document.getElementById("qtd-total")

    // PASSO 04: Escrever o resultado
    h2Resultado.innerText = estoqueTotal
}

calculaEstoqueTotalEMostraNaTela()

const estoques = document.getElementsByClassName("produto-estoque")
const estoquesArray = Array.from(estoques)

estoquesArray.forEach(function(estoque){
    if(parseInt(estoque.innerText) < 15){
        //estoque.classList.add("danger") // adiciona uma classe no elemento html

        // closest
        // console.log(estoque.closest("tr"))
        estoque.closest("tr").classList.add("danger")
    }
})