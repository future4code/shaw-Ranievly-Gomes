//EXERCICIOS DE INTERPRETAÇÃO


//RESPOSTAS1:

//Matheus Nachtergaele
//Virginia Cavendish
//canal: "Globo", horario: "14h"}

//----------------------------------------------------------------------------------------

//RESPOSTA2:

//nome: "Juca", 
//idade: 3, 
//raca: "SRD

//juba
//idade: 3, 
//raca: "SRD

//jubo
//idade: 3, 
//raca: "

//----------------------------------------------------------------------------------------------------------

//o spread copia o valor mutavel que são arrays, objetos e function, fazendo a copia e não alterando depois

//-----------------------------------------------------------------------------------------------------------

//RESPOSTA3

 //a: false
 //b:retornou undefinide, pois a propriedade altura não existe dentro do objeto
//------------------------------------------------------------------------------------------------------------

//EXERCICIOS DE ESCRITA DE CÓDIGO

 /*
 const pessoa = {
    nome:'Ranievly',
    apelidos:["Rani","Raninha","Ranão"]
};
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos.slice(0,2)} ou ${pessoa.apelidos[2]}`)

*/
//------------------------------------------------------------------------------------------------------------------

/*
    const pessoa = {
    nome:'Ranievly',
    apelidos:["Rani","Raninha","Ranão"]
    };

    let novoApelido = {...pessoa};

    pessoa.apelidos =['sem','--','chocolate'];
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos.slice(0,2)} ou ${pessoa.apelidos[2]}`)
*/
    //------------------------------------------------------------------------------------------------------------

   /* 
    function pessoa(pessoa){
        console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos.slice(0,2)} ou ${pessoa.apelidos[2]}`)
    }
    let novoApelido = {...pessoa};

    pessoa.apelidos =['sem','--','chocolate'];

*/

//---------------------------------------------------------------------------------------------------------------
/*


let carrinho=[]

let fruta1 = {
    disponibidade: true,
    nome:"pessêgo"

}
let fruta2 = {
    disponibidade: true,
    nome:"pêra"

}
let fruta3 = {
    disponibidade: true,
    nome:"laranja"

}

function objetosFrutas(parametro){
    carrinho.push(parametro)
}
objetosFrutas(fruta1)
objetosFrutas(fruta2)
objetosFrutas(fruta3)
*/

//-----------------------------------------------------------------------------

//DESAFIO1
/*
function dadosPessoa(){
    let nome = prompt("Qual seu nome?")
    let idade = Number(prompt("Qual sua idade?"))
    let job = prompt("Qual sua profissão?")

    let dados = {
        nome:nome,
        idade: idade,
        job:job
    }
    return console.log(dados, typeof dados)
}

dadosPessoa()
*/
//-------------------------------------------------------------------------------

//DESAFIO2
/*
function dadosFilme(){

    let  filme1 = {
        nome:"Homem Aranha",
        ano:2021
    }
    let  filme2= {
        nome:"Harry Potter",
        ano:2001
    }
    let continha1 = filme1.ano >= filme2.ano 
    console.log(`O primeiro filme foi lançado antes do segundo: ${continha1}`)

    let continha2 = filme1.ano <= filme2.ano 
    console.log(`O primeiro filme foi lançado antes do segundo: ${continha2}`)
    //return console.log(dados, typeof dados)
}

dadosFilme()

*/

//--------------------------------------------------------------------------------



