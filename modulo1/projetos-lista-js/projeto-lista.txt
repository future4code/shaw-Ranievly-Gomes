// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  const altura = Number(prompt("Qual a altura do triângulo?"));
  const largura = Number(prompt("Qual a largura do triângulo?"));
  const area = (altura*largura);
  
  console.log(area);
}
  console.log(calculaAreaRetangulo(area))
// EXERCÍCIO 02
function imprimeIdade() {
   // implemente sua lógica aqui

  const anoAtual = Number(prompt("Em que anos estamos?"));
  const anoNasc = Number(prompt("Em que ano você nasceu?"));
  const resultadoIdade = (anoAtual-anoNasc);

  console.log(resultadoIdade)
}
console.log(imprimeIdade(resultadoIdade))

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 const resultadoImc= peso/(altura * altura);
 return resultadoImc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt("Qual seu nome?");
  const idade = Number(prompt("Qual sua idade?"));
  const email = prompt("Qual seu email?");
  let mensagemUsuario = (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

  console.log(mensagemUsuario)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
 
  const corUm = prompt("Digite a sua 1° cor preferida:")
  const corDois = prompt("Digite a sua 2° cor preferida:")
  const corTres= prompt("Digite a sua 3° cor preferida:")

  const corFav = [corUm,corDois,corTres]

  console.log(corFav)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
    return string.toUpperCase()
}
    retornaStringEmMaiuscula("conseguiiii")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

const resultadoIngresso = (custo / valorIngresso)

return resultadoIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return   string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimo = (array.slice(-1)[0])
  return ultimo
} 

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

    let guarda = array[0]
    array[0] = array[array.length -1]
    array[array.length -1] = guarda

    return array
  }
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
       return   string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual:"))
  let anoNasc = Number(prompt("Digite o ano de nascimento:"))
  let anoEmissao = Number(prompt("Digite o ano da emissão do RG:"))

  let idadeReal = anoAtual - anoNasc
  let dataRg = anoAtual - anoEmissao

  let renovar = (idadeReal <= 20 && dataRg >= 5) || (idadeReal > 20 && idadeReal <= 50 && dataRg >= 10) || (idadeReal > 50 && dataRg >= 15)

  console.log(renovar);
 
}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  //const verif1 = ano%4
 
  const  testeUm = ano % 4
  const bis = testeUm === 0
  const testeDois = ano % 400
  const bis2 = testeDois === 0
  const testeTres = ano % 100
  const bis3 = testeTres === 0
  return !(bis3 && !bis2) && bis
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos?") === "sim"
  const medio  = prompt("Você possui ensino médio completo?") === "sim"
  const curso = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") === "sim"

  console.log(idade && medio && curso);
  
}