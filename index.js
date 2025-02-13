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

subtracao = (a,b) => {
    return a - b
}