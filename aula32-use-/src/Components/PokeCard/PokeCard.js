/*import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";


export default function App {
    const [id, setId] = useState(1);
    const [name, setName] = useState("");
    // lista de pokemons que está sendo guardada no estado
    const pegarId = (e) => {
        setId(e.target.value)
    };

    const getPersonagem = (id) => {

        axios
            .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
            .then(res => {

                setName(pokeId: res.data);
                setId(res.data.id)
            })
            .catch((err => {
                alert(err.res.data);
            });

    
        useEffect(() => {
            getPersonagem(id)
        }, [id]);


        return (
            <div className="App">

                <select onChange={name}>
                    <option value={""}>Nenhum</option>
                  
                    {this.state.pokeList.map(pokemon => {
                        return (
                            <option key={pokemon.name} value={pokemon.name}>
                                {pokemon.name}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    

*/
