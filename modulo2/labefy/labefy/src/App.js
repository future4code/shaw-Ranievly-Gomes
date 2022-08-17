import React from "react"
import TelaCadastroPlaylist from "./Components/TelaCadastroPlaylist"
import TelaPlaylist from "./Components/TelaPlayList.js"

export default class App  extends React.Component {
  state ={
    telaAtual:"Cadastro"
  }

  escolheTela = () =>{
    switch(this.state.telaAtual){
      case "Cadastro":
        return <TelaCadastroPlaylist irParaLista={this.irParaLista}/>
      case "Lista":
        return <TelaPlaylist irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro tente novamente</div>
    }
  }

  irParaCadastro = () =>{
    this.setState({telaAtual: "Cadastro"})
  }

  irParaLista = () =>{
    this.setState({telaAtual: "Lista"})
  }

 salvar= () =>{
    this.setState({
      alert("Playlist Salva com Sucesso")
    })
  }

  cancelar = () =>{
    this.setState({
      alert("Playlist Cancelada com Sucesso")  
    })
  }



  render(){
  return (
    <div>
     {this.escolheTela()}
    </div>
  )
}
}