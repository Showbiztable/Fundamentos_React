import React from "react"

const Aleatorio = (props) => {
    // const {min, max} = props
    const rangeMaximo = props.max - props.min
    const numeroAleatorio = Math.floor(Math.random() * rangeMaximo);
    return (
        <div>
            <h2>Número Aleatório entre Ranges Pré-definidos</h2>
            <p>O range foi de {props.min} até {props.max} e o valor aleatório escolhido foi de {numeroAleatorio}</p>
        </div>
    )
}

export default Aleatorio