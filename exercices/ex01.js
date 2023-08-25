class Exercice1{
    constructor(){
        this.pegaDados();
    }
    // Retorna os dados digitados pelo usuário após o 
    // botão ser clicado
    pegaDados(){
        let form = document.querySelector(".form");
        form.addEventListener("submit", (item)=>{
            item.preventDefault();
            let input = document.querySelector(".test");
            let textoDoInput = input.value;
            console.log(textoDoInput)
        })
    }
}