import React from 'react'; 
import './App.css';


class App extends React.Component{
  state = {
    mensagens:[
      {
        usuario:"",
        mensagem:""
      }
    ],
    usuario:"",
    mensagem:""
  }

  onChangeUsuarioValor=(event)=>{
    this.setState({usuario:event.target.value})
  }

  onChangeMensagemValor=(event)=>{
    this.setState({mensagem:event.target.value})
  }

  onClickBotaoEnviar = (event) =>{
      const usuario ={
        usuario:this.state.usuario,
        mensagem:this.state.mensagem
      }

      const mostraTexto =[
        ...this.state.mensagens, usuario
      ]
      this.setState({mensagens:mostraTexto})
    }

  render(){
    const listaMensagens = this.state.mensagens.map((texto) =>{
      return(
        <div>
          {texto.usuario}
          {texto.mensagem}
        </div>
      )
    }
  )
    return(
      <div>
        <input placeholder="Nome" value={this.state.usuario} onChange={this.onChangeUsuarioValor}/>
        <input placeholder="Mensagem" value={this.state.mensagem} onChange={this.onChangeMensagemValor}/>
      
        <button onClick={this.onClickBotaoEnviar}>Enviar</button>
      </div>
    )
  }
}

export default App;
