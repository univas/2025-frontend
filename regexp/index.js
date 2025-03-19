document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()

    const inputCPF = document.getElementById("cpf")
    const inputEmail = document.getElementById("email")

    // const regexpCPF = /\d/ // Considerar que todos os caracteres devem ser dígitos (0-9)

    const regexpCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

    if(regexpCPF.test(inputCPF.value)){
        alert("Formulário enviado!")
    }else{
        alert("Erro no CPF!")
    }

    const regexpEmail = /^[\w-\.]+@[a-z0-9]+(\.[a-z]{2,4}){1,2}$/

    if(regexpEmail.test(inputEmail.value)){
        alert("Formulário enviado!")
    }else{
        alert("Erro no E-mail!")
    }
})

document.getElementById("btnMascaraCPF").addEventListener("click", function(){
    
})