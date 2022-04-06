import React from "react";
import TelaUm from "./components/TelaUm";
import TelaLista from "./components/TelaLista";


export default class App extends React.Component {
  state={
    telaAtual:"cadastro"

  }

  escolheTela = () => {
    switch (this.state.telaAtual){
    case "cadastro":
      return <TelaUm  irParaLista={this.irParaLista}/>
    case "lista":
      return <TelaLista irParaCadastro={this.irParaCadastro}/>
    default:
      return <div> Página não encontrada!</div>
  }
}  

irParaCadastro = () =>{
  this.setState({telaAtual:"cadastro"})
}

irParaLista = () =>{
  this.setState({telaAtual:"lista"})
}
  render() {
    return(
    <div>
      {this.escolheTela()}
      </div>
    )
  }
}
