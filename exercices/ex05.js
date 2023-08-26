class Exercice5{
    constructor(){
        this.soma();
    }
    // Retorna a soma de dois numeros digitados 
    //pelo usuário no prompt 
    soma(){
        let num1 = window.prompt("Digite um numero: ");
        let num2 = window.prompt("Digite outro numero: ");
        let soma = num1  + num2;
        window.alert(soma);
    }
}