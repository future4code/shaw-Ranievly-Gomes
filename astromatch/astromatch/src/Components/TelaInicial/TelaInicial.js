import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import BotaoApi from "../BotaoApi/BotaoApi";
import {
  InicialStyle,
  InicialStyleImg,
  InicialStyleTexto,
  InicialStylePaiDeTodos,
} from "./style";

const TelaInicial = () => {
  const [perfil, setPerfil] = useState({});

  const Api = async () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Rani-/person";
    try {
      const res = await axios.get(url);
      setPerfil(res.data.profile);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const ChoosePerson = async () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Rani-/choose-person";
    const body = {
      id: perfil.id,
      choice: true,
    };

    try {
      const res = await axios.post(url, body);
      Api();
      if (res.data.isMatch) {
        alert("deu match");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <InicialStyle>
      {perfil ? (
        <InicialStylePaiDeTodos>
          <InicialStyleImg>
            <img src={perfil.photo} alt="" />
          </InicialStyleImg>
          <InicialStyleTexto>
            <h2>
              {perfil.name}, {perfil.age}
            </h2>
            <p>{perfil.bio}</p>
          </InicialStyleTexto>
          <BotaoApi Choose={ChoosePerson} Api={Api} />{" "}
        </InicialStylePaiDeTodos>
      ) : (
        <p>ERRO</p>
      )}
    </InicialStyle>
  );
};
export default TelaInicial;
