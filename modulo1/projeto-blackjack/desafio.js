/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    let mensagemBoasVindas = alert("Seja Bem-vindo(a)! ao jogo de Blackjack!")

let jogo = confirm("Quer iniciar uma nova rodada?");

    if(jogo){
       
      let primeiraCartaUsuario = comprarCarta()
      let segundaCartaUsuario = comprarCarta()
      let primeiraCartaPc = comprarCarta()
      let segundaCartaPc = comprarCarta()
      
      let somaUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
      let somaPc = primeiraCartaPc.valor + segundaCartaPc.valor

      console.log(`Usuário- cartas: ${primeiraCartaUsuario.valor} + ${segundaCartaUsuario.texto} - ${somaUsuario}`)
      console.log(`Usuário- cartas: ${primeiraCartaPc.valor} + ${segundaCartaPc.texto} - ${somaPc}`)

      if(somaUsuario === (A) && somaPc === (A)){
         console.log("Opa, deu empate!!")
      
      }else if{
         console.log(`Usuário- cartas: ${primeiraCartaUsuario.valor} + ${segundaCartaUsuario.texto} - ${somaUsuario}`)
      
      }
   }