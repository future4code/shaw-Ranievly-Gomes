import React from "react";

export default class TelaPlaylist extends React.Component{
  render() {
    return (
        <div>
             <h2>Minhas Playlists</h2>
            <button onClick={this.props.irParaCadastro}>Voltar Para Cadastro</button>
        </div>
    )
  }
}