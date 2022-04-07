
import './App.css';

function EtapaUm() {
  return (
    <div className="EtapaUm">
     <h1>Dados Gerais</h1>
         <label>
            1.Qual seu nome?
            <input type={texto}/>
         </label>

         <label>
            2.Qual sua idade?
            <input type={texto}/>
         </label>
         
         <label>
            3.Qual seu email?
            <input type={texto}/>
         </label>
    </div>
  );
}

export default EtapaUm;