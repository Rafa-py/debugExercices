class Exercice5{
    constructor(){
        this.mostraDados();
    }
    // Retorna no console o resultado da expressão
    // matematica passada no input. 
    mostraDados(){
        let form = document.querySelector(".form");
        form.addEventListener("submit", (item)=>{
            item.preventDefault();
            let input = document.querySelector(".text").value;
            let calc =  input.eval();
            console.log(calc);
        })
    }
}