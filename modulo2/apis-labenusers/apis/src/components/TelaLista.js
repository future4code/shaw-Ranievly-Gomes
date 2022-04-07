import React from "react"

export default class TelaLista extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.irParaCadastro}>
                    Cadastro de Usúarios
                </button>
                <h2>Lista de Usuários</h2>
            </div>
        )
    }
}