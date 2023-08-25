class Exercice3{
    constructor(){
        this.mostraDados();
    }
    // Mostra os dados digitados na tela do usuário
    //após o botão ser clicado
    mostraDados(){
        let form = document.querySelector(".form");
        form.addEventListener("submit", (item)=>{
            item.preventDefault();
            let input = document.querySelector(".text");
            let form = document.querySelector(".form");
            let h1 = document.createElement("h1")
            h1.innerText = `${input}`
            form.appendChild(h1);
        })
    }
}