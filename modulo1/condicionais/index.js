//EXERCÍCIOS DE INTERPRETAÇÃO


//RESPOSTA DA 1:

//a: o teste vê se o resultado é identico a 0, (se é par ou ímpar)
//b: imprime passou no teste para número pares(2,4,6,8...)
//c: imprime não passou no teste para (número ímpares(3,5,7,9...))

//------------------------------------------------------------------------------

//RESPOSTA DA 2:

//a: O código busca o preço através do nome, ele retorna o preço da fruta de acordo com o que for digitado dentro do prompt.
//b: O preço da fruta, maçã, é R$: 2.25
//c:  continuaria executando o código, retornando o preço de 5, até encontrar o breack, e retornar o último valor.

//----------------------------------------------------------------------------------------------------

//RESPOSTA 3

//a: está pegando o valor que o úsuario digita e comparando se é maior do que 0
//b: se for 10 irá aparecer "Esse número passou no teste"e dará um erro, se for -10 não retorna a mensagem, e da um erro.
//c: a variável let não foi usada durante o código, pois não está no escopo global, e também não foi usada dentro da função,
//quando ela é chamada dentro do console.log, ela retornar um erro justamente por isso.

//---------------------------------------------------------------------------------------------------------

//QUESTÃO DE ESCRITA DE CÓDIGO

//QUESTÃO1

/*
let idadeUsuario = Number(prompt("Qual sua idade?"))

function dirigir(idade){
    if(idade >= 18){
        console.log("você pode dirigir")
    }else{
        console.log("você não pode dirigir")
    }
}
dirigir(idadeUsuario)

*/
//-----------------------------------------------------------------------------------------------------------

//QUESTÃO2
/*

let turnoAluno = prompt("Qual seu turno? Se for Matutino digite: M , se for Vespertino digite: V ou se for Noturno digite: N")

function turno(turno){
    if(turno === "M" || turno === "m"){
        console.log("Bom dia")

    }else if(turno === "V" || turno ==="v"){
        console.log("Boa Tarde")

    }else if(turno === "N" || turno ==="n"){
            console.log("Boa Noite")

    }else
        (console.log("Turno não encontrado"))
    
}
turno(turnoAluno)

*/

//---------------------------------------------------------------------------

//QUESTÃO3

/*
let turnoAluno = prompt("Qual seu turno? Se for Matutino digite: M , se for Vespertino digite: V ou se for Noturno digite: N")

function turno(turno){

  switch(turno){

        case "M":
        console.log("Bom dia");
        break;

        case "V":
        console.log("Boa Tarde");
        break;
    
        case "N":
        console.log("Boa Noite");
        break;

        default:
        console.log("Turno não encontrado");
        break;
  }
}
turno(turnoAluno)
*/

//---------------------------------------------------------------------------------------

//QUESTÃO4

/*
let filme = prompt("Qual o filme de hoje?")
let ingresso = prompt("Qual o valor do ingresso?")

function escolhaFilme(nomeFilme,ingressoFilme){
    if(nomeFilme === "fantasia" && ingressoFilme == 15){
        console.log("Bom Filme")
        

    }else
        (console.log("Escolha outro filme :("))

}

let filme = prompt("Qual o filme de hoje?")
let ingresso = prompt("Qual o valor do ingresso?")
let lanche = prompt("Qual snack que você quer comprar?")

*/
//----------------------------------------------------------------------------------------------------


