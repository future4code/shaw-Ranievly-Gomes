import axios from 'axios'
import React from 'react'

const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"), {
  headers: {
    "content-type":'aplication.json',
    "Authorization": "Rani-Cristina-Shaw"
  }
};
const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
export default class App extends React.Component {
  //Estado com playlists e texto do input de name
  state = {
    usuario: [],
    inputName: " ",
    inputEmail: ""
  };
  componentDidMount() {
    this.getAllUsers();
  }
  getAllUsers() {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    
    axios
      .get(url, headers)
      .then((res) => {
        
        this.setState({
          usuario: res.data
        });
      })
      .catch((err) => {
        //Caso de erro exiba-o no console
        console.log(err.response.data);
      });
  }
  postgetAllUsers= () => {
    //body é criado com o valor que tem no inputName
    const body = {
      name: this.state.inputName
    };
    //Aqui é onde a função de post é chamada
    //No pot passamos a url, body, e o headers
    axios
      .post(`${baseUrl}`, body, headers)
      .then((res) => {
        //Pegartodas as playlists
        this.getAllUsers();
        //Deixar o texto do input com um valor vazio
        this.setState({
          inputName: ""
        });
      })
      .catch((err) => {
        //Alertar caso um erro aconteça
        alert(err.response.data.message);
      });
  };
  onChangeName = (e) => {
    this.setState({
      inputName: e.target.value
    });
  };
  render() {
    const componentsPlaylist = this.state.usuario.map((getAllUsers) => {
      return <li key={usuario.id}>{usuario.name}</li>;
    });
    return (
      <div>
        <label>
          Novo Usuario:
          <input value={this.state.inputName} onChange={this.onChangeName} />
        </label>
        <button onClick={this.postgetAllUsers}>Enviar</button>
        <ul>{componentsPlaylist}</ul>
      </div>
    );
  }
}
