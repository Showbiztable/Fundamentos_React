import React from "react"

const IndiretaFilho = (props) => {
    const gerarIdade = Math.ceil(Math.random() * 47)

    return (
        <div>
            Componente Filho <br />
            <button onClick={e => {
                props.quandoClicar("Fallen", gerarIdade, true)
            }
            }>Fornecer Informações para o Pai</button>
        </div>
    )
}

export default IndiretaFilho