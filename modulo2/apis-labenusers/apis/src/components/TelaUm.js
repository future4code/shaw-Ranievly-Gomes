import axios from "axios"
import React from "react"

export default class TelaUm extends React.Component{
    state ={
        name:"",
        email:""
    }

    handleName = (event)=>{
        this.setState({nome: event.target.value})
    }

    handleEmail = (event)=>{
        this.setState({email: event.target.value})
    }
    
    cadastrar = () =>{
       const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
       const body ={
           name:this.state.nome,
           email:this.state.email
       }
       axios.post(url,body,{
           headers:{
               Authorization:"Rani-Cristina-Shaw"
           }
       }).then(res) =>{
        alert("Usuario cadastrado com sucesso")
       }.catch(err)=>{
        alert("Erro ao cadastrar usúario, tente novamente.")
       }
    }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>
                Lista de Usúarios
                </button>

                <h2>Cadastro de Usúarios</h2>
                <input placeholder={"Nome"}
                value={this.state.name}
                onChang={this.handleName}
                />
                <input placeholder={"E-mail"}
                value={this.state.email}
                onChang={this.handleEmail}
                />
                
                <button onClick={this.cadastrar}>Cadastrar</button>
            </div>
        )
    }
}