const formulario = document.getElementById("formulario-produto")
// Aqui eu tenho os elementos HTML dos inputs
const nomeInput = document.getElementById("nome")
const precoInput = document.getElementById("preco")
const estoqueInput = document.getElementById("estoque")

// evento change é lançado ao sair do campo que foi digitado
nomeInput.addEventListener("change", function(event){
    // Pegar o valor digitado pelo usuário
    const conteudoDigitado = event.target.value

    // Obter a lista de produtos já cadastrados
    const produtos = document.getElementsByClassName("produto-nome")
    const produtosArray = Array.from(produtos)

    // Verificar se existe algum produto já cadastrado com o mesmo nome
    const produtosExistentes = produtosArray.filter(function(elemento){
        // compara o nome do produto digitado com o produto existente
        return elemento.innerText == conteudoDigitado
    })

    const botaoAdicionar = document.getElementById("botao-adicionar")

    if(produtosExistentes.length > 0){
        // Se existir algum produto com mesmo nome, desativa o botão de envio
        botaoAdicionar.setAttribute("disabled", true)
    }else{
        // para habilitar o botao eu preciso remover a propriedade (atributo)
        // disabled, não basta colocar como falso
        botaoAdicionar.removeAttribute("disabled")
    }
})



formulario.addEventListener("submit", function(event){
    event.preventDefault() // paralizou o comportamento padrão
    // e executou a lógica criada

    console.log("Enviou o formulário")

    // pegar os dados digitados pelo usuário
    const nome = nomeInput.value
    const preco = precoInput.value
    const estoque = estoqueInput.value

    // criar os elementos html para cada dado
    // OK ------------- <tr class="produto">
    // OK -------------     <td class="produto-nome">Notebook</td>
    // OK -------------     <td class="produto-preco">R$ 4.500</td>
    // OK -------------     <td class="produto-estoque">5</td>
    // OK -------------     <td class="produto-acoes">
    //         <button class="botao-menos">-</button>
    //         <button class="botao-mais">+</button>
    // OK -------------     </td>
    // OK ------------- </tr>
    const tr = document.createElement("tr")
    tr.classList.add("produto")

    // Para cara td, vamos criar o elemento, adicionar as classes, inserir o conteúdo e pendurar no tr pai
    const tdNome = document.createElement("td")
    tdNome.classList.add("produto-nome")
    tdNome.innerText = nome
    tr.appendChild(tdNome)

    const tdPreco = document.createElement("td")
    tdPreco.classList.add("produto-preco")
    // interpolação de strings
    tdPreco.innerText = `R$ ${preco}`
    tr.appendChild(tdPreco)

    const tdEstoque = document.createElement("td")
    tdEstoque.classList.add("produto-estoque")
    tdEstoque.innerText = estoque
    tr.appendChild(tdEstoque)

    const tdAcoes = document.createElement("td")
    tdAcoes.classList.add("produto-acoes")
    tr.appendChild(tdAcoes)

    // inserir os elementos html no DOM
    const tbody = document.getElementById("produtos-tabela")
    tbody.appendChild(tr)

    calculaEstoqueTotalEMostraNaTela()
})