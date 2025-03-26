// vai executar o código quando terminar de carregar a página
window.onload = () => {
    const tema = localStorage.getItem("tema")
    const body = document.getElementById("pagina")

    // se não existir nada no tema
    if(!tema || tema == "light"){
        body.classList.remove("dark")
        body.classList.add("light")
        if(tema == null)
            localStorage.setItem("tema", "light") // salva o tema inicial
    }else{
        body.classList.remove("light")
        body.classList.add("dark")
    }
}

document.getElementById("btn-alterar-tema").addEventListener("click", function(){
    const tema = localStorage.getItem("tema")
    const body = document.getElementById("pagina")

    console.log(tema)

    if(!tema || tema == "dark"){
        body.classList.remove("dark")
        body.classList.add("light")
        localStorage.setItem("tema", "light") // salva o tema claro
    }else{
        body.classList.remove("light")
        body.classList.add("dark")
        localStorage.setItem("tema", "dark")// salva o tema escuro
    }
})