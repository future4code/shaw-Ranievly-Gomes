import React from "react"

export default class TelaCadastroPlaylist extends React.Component{
  render() {
    return (
        <div>
          <h2>Cadastrar Playlist</h2>
          <input placeholder=""></input>
          <button onClick={this.props.irParaLista}>Minhas Playlist</button>
          <button onClick={this.props.salvar}>Salvar</button>
          <button onClick={this.props.cancelar}>Cancelar</button>
        </div>
    )
  }
}
