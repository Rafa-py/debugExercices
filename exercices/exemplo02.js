class Exemplo2{
  constructor(){
      this.dizOla();
  }
  // Retona a mensagem 'Olá' no console.
  dizOla(){
    let nome = window.prompty("Digite seu nome: ");
    window.alert(`Olá, ${nome}`);
  }
}