import React, { useState } from "react";
import TelaInicial from "./Components/TelaInicial/TelaInicial";
import TelaMatch from "./Components/TelaMatch/TelaMatch";

const App = () => {
  const [trocatela, setTrocatela] = useState("");
  const escolherTela = () => {
    // switch (trocatela) {
    //   case "Inicial":
    //     return <TelaInicial/>;
    //   case "TelaMatch":
    //     return <TelaMatch />;
    //   default:
    //     return <TelaInicial />;
    //}
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
    <div>
      {!trocatela ? <button onClick={() => mudaTela("Inicial")}>Inicial</button>
      :<button onClick={() => mudaTela()}>TelaMatch</button>}
      {escolherTela()}
    </div>
  );
};

export default App;
