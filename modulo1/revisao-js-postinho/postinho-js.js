// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:
/*
function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b){
    return `No comparador de igualdade ${a}===${b} é ${a === b}`
}
console.log(checarIgualdade(256,26));

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(numberOne,NumberTwo){
    if(numberOne > NumberTwo){
        return "numberOne,true"
    
    }else{
        return "numberTwo,true"
    }
}
console.log(verificaSeEMaior(321, 2156));{
}
*/

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1 ==='1'= false
// b-) 1 =='1'= true
// c-) 'a'==='b'= true
// d-) 'b'>'a'= false
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
/*
const cadastro = () => {
    const usuario = []

    let nome = prompt("Digite seu nome:");
    let anoNascimento = Number(prompt("Digite seu ano de nascimento:"));
    let senha = prompt("Digite sua senha:")
    let nacionalidade = prompt("Digite sua nacionalidade:")

    if(2022- anoNascimento >= 18){
        return "Você precisa ser maior de idade"; 

    }else if(senha.length >= 6){
        return "A senha precisa ter ao menos 6 caractéres";
    
    }else if((nacionalidade.includes("brasileira") ==! "brasileira") || 
             (nacionalidade.includes("brasileira") ==! "brasileiro")){
        return "não é brasileiro(a)"
   
    }else if(anoNascimento === true && senha === true && nacionalidade === true){ 
             usuario.push(nome,anoNascimento,senha,nacionalidade)
             return usuario
    
    }else{
        return "cadastro realizado com sucesso!"
    }  
}

cadastro();
*/
//console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------
/*
const login = () => {
    let senhaUsuario = prompt("Digite sua senha:")
    const login = "labenu"

    if(senhaUsuario === login){
        console.log("usuário logado")
    
    }else{
        console.log("senha inválida")
    }
}
*/
//console.log(login());
/*
// Exercício 5----------------------------------------------------------------------------------------------------
    const primeiraDose = () =>{
    let nomeDoUsuario  = prompt("Digite seu nome:")
    let nomeVacina     = prompt("Digite sua vacina:") 
    let tempo
    let data

    if(nomeVacina ===  "Coronavac"){
        `Olá ${nomeDoUsuario}! A próxima dose da ${vacina} é daqui a ${tempo = "28 dias"} dias.
         Compareça no posto na data ${data = "Dia 10  de Abril"}.`
    
    }else if (nomeVacina === "Astrazenaca"){
        `Olá ${nomeDoUsuario}! A próxima dose da ${vacina} é daqui a ${tempo = "90 dias"} dias. Compareça 
         no posto na data ${data ="Dia 11 de junho"}.`
    
    }else {
            Return `Olá ${nomeDoUsuario}! A próxima dose da ${vacina} é daqui a ${tempo = "90 dias"} dias. Compareça 
            no posto na data ${data ="Dia 11 de junho"}.`
    }
}
    console.log(primeiraDose())
*/
// Exercício 6 -------------------------------------------------------------------------------------
/*
const segundaDose = () => {
    const usuarios = [
    { nome: "Artur", imunizacao: "incompleta" },
    { nome: "Barbara", imunizacao: "completa" },
    { nome: "Carlos", imunizacao: "incompleta"}
];

}for (let usuario of usuarios) {
    if (usuario.nome === pessoaVacinada) {
      usuario.imunizacao = "completa"
    }
  }

  return usuarios
};

*/
// Exercício 7 --------------------------------------------------------------------------------------
/*
const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

     const  naoImunizados = usuarios.filter((usuarios) => console.log(
        `Olá ${usuarios.nome}! Sua imunização está ${usuarios.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
     ))
     return naoImunizados
}

avisoAosAtrasados()

// DESAFIO------------------------------------------------------------------------------------------
    
const cadastroDesafio = () => {
    //  Sua lógica aqui
    let nome = prompt("Digite seu nome:");
    let ano= Number(prompt("Digite seu ano de nascimento:"));
    let nacionalidade = prompt("Digite sua nacionalidade:")
    let senha = prompt("Digite sua senha:")
    let vacina = prompt("qual foi sua vacina?")
    let imunizacao = prompt("qual foi sua vacina?")


   const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }
  ]
  const objeto ={
    nome: nome,
    ano: ano,
    nacionalidade: nacionalidade,
    senha: senha,
    vacina: vacina,
    imunizacao: imunizacao,
}

    usuarios.push(objeto)
    console.log(objeto)
    return usuarios 
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    
    let nome = prompt("Digite seu nome:");
    let anoNascimento = Number(prompt("Digite seu ano de nascimento:"));
    let nacionalidade = prompt("Digite sua nacionalidade:")
    let senha = prompt("Digite sua senha:")
    let vacina = prompt("qual foi sua vacina?")
    let imunizacao = prompt("qual foi sua vacina?")
}

console.log(loginDesafio());

//======================================================================
const primeiraDoseDesafio = () => {

    const primeiraDoseDesafio = () => {
    
        let novoUsuario = {...usuarios, 
        nome: `${nome}`, 
        ano: `${anoDeNascimento}`, 
        nacionalidade: `${nacionalidade}`,
        senha: `${senhaDoUsuario}`,
        vacina: "incompleta"

//========================================================================
const segundaDoseDesafio = (nomeDoUsuario) => {

    if(nomeDoUsuario === usuarios.nome){
        return {...usuarios, nomeDoUsuario, imunizacao: "completa"}
    }

console.log(segundaDoseDesafio(nome));

//------------------------------------------------------------------------
const segundaDoseDesafio = (nomeDoUsuario) => {
    if(nomeDoUsuario === usuarios.nome){
        return {...usuarios, nomeDoUsuario, imunizacao: "completa"}
    }
}

console.log(segundaDoseDesafio(nome));
//------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
      const usuarios = [

       { nome: "Artur", imunizacao: "incompleta" },
       { nome: "Barbara", imunizacao: "incompleta" },
       { nome: "Carlos", imunizacao: "incompleta" }
]
    return {...usuarios, nomeDoUsuario, imunizacao: "completa"}
}
 console.log(segundaDose("Barbara"))

//--------------------------------------------------------------------------
*/

    
        
