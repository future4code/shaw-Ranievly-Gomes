function Evento(){
    function meuEvento(){
        console.log("Ativado")
    }

    return(
        <div>
            <p>Clique</p>
            <button onClick="{meuEvento}">Ativar</button>
        </div>
    )
}

export default Evento