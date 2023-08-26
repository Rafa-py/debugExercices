class Exercice4{
    constructor(){
        this.calc();
    }
    // Retorna no console o resultado da expressão
    // matematica passada no input. 
    calc(){
        let form = document.querySelector(".form");
        form.addEventListener("submit", (item)=>{
            item.preventDefault();
            let input = document.querySelector(".text").value;
            let calculo =  input.eval();
            console.log(calculo);
        })
    }
}