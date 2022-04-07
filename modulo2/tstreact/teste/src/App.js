import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="container">
      <div className="App-row">
  
         <Card
         titulo="" 
         imagens=""
         precoAntigo="79.90"
         novoPreco="64.90"
         moeda="R$:"
         alt=""
         /> 

        <Card
        titulo="" 
        imagens=""
        precoAntigo="79.90"
        novoPreco="64.90"
        moeda="R$:"
        alt=""
        />

         <Card
        titulo="" 
        imagens="data:image/jpeg;base64,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"
        precoAntigo="79.90"
        novoPreco="64.90"
        moeda="R$:"
        alt=""
        />

        <Card
        titulo="" 
        imagens=""
        precoAntigo="79.90"
        novoPreco="64.90"
        moeda="R$:"
        alt=""
        />

         <Card
        titulo="" 
        imagens=""
        precoAntigo="79.90"
        novoPreco="64.90"
        moeda="R$:"
        alt=""
        />

         <Card
        titulo="" 
        imagens=""
        precoAntigo="79.90"
        novoPreco="64.90"
        moeda="R$:"
        alt=""
        />

         <Card
        titulo="" 
        imagens=""
        precoAntigo="79.90"
        novoPreco="64.90"
        moeda="R$:"
        alt=""
        />

         <Card
        titulo="" 
        imagens=""
        precoAntigo="79.90"
        novoPreco="64.90"
        moeda="R$:"
        alt=""
        />

      <Card
        titulo="" 
        imagens=""
        precoAntigo="79.90"
        novoPreco="64.90"
        moeda="R$:"
        alt=""
        />
    </div>
    </div>
  );
}

export default App;
