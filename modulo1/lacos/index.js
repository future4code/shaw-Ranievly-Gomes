//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

//QUESTÃO1

// Resposta: o código está retornando a cada verificação (se é maior que a index), a soma do valor com o index.

//----------------------------------------------------------------------------------------------------------------

//QUESTÃO2

// Ele está retornando todos os números do array que são maiores do que 18

// Poderia criar um array vazio, e usar o push para inserir o valor

//-------------------------------------------------------------------------------------------------------------------

//QUESTÃO3

//Ele primeiramente pega o número que foi o usuario digitou, compara se a quantidadeAtual e menor do que a quantidadeTotal,
//se sim, ele pega o asterisco e acrescenta mais um na linha fazendo, com que seja acrescentado a quantidade de asterisco
//que a pessoa digitou linha por linha. ps:acho que deu pra entender o que eu quis dizer kkkkkkkk ... espero kkkkk

//---------------------------------------------------------------------------------------------------------------------

//EXERCíCIOS ESCRITA DE CÓDIGO 

//QUESTÃO1

/*

let quantidadeBichinho = Number(prompt("Oi, Quantos bichinhos você tem?"))
let arrayBichinho = []
let i = 0

    if(quantidadeBichinho === 0){
        console.log("Que pena!Você pode adotar um bichinho");
    
    }else(quantidadeBichinho > 0)
        while(i < quantidadeBichinho){
            nomesBichinho = prompt("Opa que legal! Qual nome deles?");
            i++; 
            arrayBichinho.push(nomesBichinho);
        } 
        console.log(arrayBichinho)

*/

//--------------------------------------------------------------------------------------------------------
//QUESTÃO2//

//RESPOSTA 2A

/*
let arrayOriginal = [1000,400,300,500,200,100,200,350,450]

for(let numero of arrayOriginal){
    console.log(numero);
}

*/

//---------------------------------------------------------------------------------------------------------

//RESPOSTA 2B

/*
let arrayOriginal = [1000,400,300,500,200,100,200,350,450]

    function divideArray(array){
        for(let numeroArray of array){
            let divide = numeroArray / 10
            console.log(divide)
        }
    }

divideArray(arrayOriginal)
 
*/

//----------------------------------------------------------------------------------------

//RESPOSTA 2C

/*
let arrayOriginal = [1111,400,33,555,200,100,200,350,450]
let novoArray = []

function arrayPares(array){
    for (let num of array){
        if(num % 2 === 0){
            novoArray.push(num)
        }    
    }
    console.log(novoArray)
}

arrayPares(arrayOriginal)

*/

//--------------------------------------------------------------------------------------------

//RESPOSTA 2E:

/*
let arrayOriginal = [1000,400,300,500,200,100,200,350,450]
let valorMin = arrayOriginal[0]
let valorMax = arrayOriginal[0]

    function maxEMinNumero(array){
        for(num of array){
            if(num > valorMax ){
                valorMax = num
            }
            if(num < valorMin ){
                valorMin = num
            }
        }
        console.log(valorMin)
        console.log(valorMax)
    }

    maxEMinNumero(arrayOriginal)

*/

let jogadorUm = prompt("Seja bem-vindo jogador 1. Escolha um número")
let jogadorDois = prompt("Jogador 2 escolha o número que você acha que é o certo")

let i = 0


   if(jogadorDois[i] != jogadorUm){
           while( jogadorDois[i] < jogadorUm){
             console.log("Você erroooou! o número é menor");
        
           }if( jogadorDois[i] > jogadorUm){
                console.log("Você erroooou! o número é maior, Vamos lá. Tente mais uma vez!");
        }
        let= prompt("Vamos lá. Tente mais uma vez!")
    i++;
     }
     
game(jogadorUm,jogadorDois);

