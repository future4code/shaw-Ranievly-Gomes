import React, { useState} from "react";
import TelaInicial from "./Components/TelaInicial/TelaInicial";
import TelaMatch from "./Components/TelaMatch/TelaMatch";
import { Container, Botao } from "./style";

const App = () => {
  const [trocatela, setTrocatela] = useState("");
  const escolherTela = () => {
    if (trocatela === "Inicial") {
      return <TelaInicial />;
    } else {
      return <TelaMatch />;
    }
  };

  const mudaTela = (nomeTela) => {
    setTrocatela(nomeTela);
  };

  return (
    <Container>
      <Botao>
      <h1>Astro<span>Match</span></h1>
        {!trocatela ? (
          <button onClick={() => mudaTela("Inicial")}>Inicial</button>
        ) : (
          <button onClick={() => mudaTela()}>TelaMatch</button>
        )}
      </Botao>
      {escolherTela()}
    </Container>
  );
};

export default App;
