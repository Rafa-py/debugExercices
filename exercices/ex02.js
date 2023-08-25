class Exercice2{
    constructor(){
        this.salvaDados();
    }
    // Salva os dados digitados no local storage
    salvaDados(){
        let form = document.querySelector(".form");
        form.addEventListener("submit", (item)=>{
            item.preventDefault();
            let input = document.querySelector(".text").value;
            localStorage.setItem(input)
        })
    }
}