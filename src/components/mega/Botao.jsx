import React from "react"

const Botao = (props) => {
    return (
        <div>
            <button onClick={props.setResultado}> Gerar Resultado</button>
        </div>
    )
}

export default Botao