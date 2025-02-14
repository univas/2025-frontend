console.log("Olá");


/*
    Criando duas variáveis
    Uma chamada nome com conteúdo marcos
    Outra chamada Nome com conteúdo jose
 */
var nome = "marcos"
var Nome = "jose"

// Vai imprimir no console o conteúdo das variáveis
console.log(nome, Nome)



// Variáveis
// Fracamente tipada

// var => variável de escopo global
var cidade = "Pouso Alegre"
// let => variável de escopo local
let faculdade = "Univas"

// const => Constante, seu conteúdo não pode ser alterado.
const nome_completo = "Marcos Antonio"
const idade = 30


let idade_sem_tipo = 30
idade_sem_tipo = "Trinta anos"

let numero1 = 10
let numero2 = "1"

console.log(numero1)
console.log(numero2)
console.log(numero2+numero1)
console.log(numero1+parseInt(numero2))


// null e undefined
// null é algo que existe mas é vazio
// undefined é alog que não existe ou não foi criado


console.log("ten" == 10)

//funções

function soma(a, b){
    return a + b
}

subtracao = (a,b) => { // arrow function
    return a - b
}

function divisao(a, b){
    if(b == 0){
        throw new Error("Não pode fazer divisão por zero.")
    }

    return a/b
}

function executar(valor1, valor2, operacao){ // função callback
    return operacao(valor1, valor2)
}

executar(10, 5, subtracao)

// console.log(executar(10, 0, divisao))


function potencia(a, b){
    let resultado = 1
    for(let i = 1; i <= b; i++){
        resultado = resultado * a
    }

    return resultado
}




// vetores

// int numeros[10];
var numeros = [10,20,30,40,50]

console.log(numeros)

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

numeros.forEach(function(valor){
    console.log(valor)
})

const numeros2 = numeros.map(function(numero){
    return numero*numero
})

console.log(numeros, numeros2)



const alunos = [
    "Marcos",
    "Caio",
    "Carlos",
    "Joao",
    "Fabio"
]

alunos.forEach(function (aluno){
    console.log(aluno)
})

// contar quantos alunos começam com a letra c
let contador = 0

alunos.forEach(function(aluno){
    if(aluno.startsWith("C")){
        contador++
    }
})

console.log("Alunos com C:", contador)

// map => sempre vai retornar um novo array com
// a mesma quantidade de elementos do array original
const alunosTransformados = alunos.map(function(aluno){
    return aluno.toUpperCase()
})

console.log(alunos, alunosTransformados)




/**
 * 1. Montar um array de números e exibir na tela apenas os números pares usando foreach
 * 
 * 2. Montar um array de números e exibir na tela apenas os números primos usando foreach
 * 
 * 3. Montar um array de nomes e criar um novo array contendo todas as letras minusculas usando map
 * 
 * 4. Montar um array de nomes e criar um novo array contendo todas as letras "a" trocadas por "b"
 */