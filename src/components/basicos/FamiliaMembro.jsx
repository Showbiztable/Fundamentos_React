import React from "react"

const FamiliaMembro = (props) => {
    return (
        <div>
            <p>Pai: {props.nomePai} <strong>{props.nomeFamilia}</strong></p>
            <p>Mãe: {props.nomeMae} <strong>{props.nomeFamilia}</strong></p>
            <p>Animal: {props.nomeAnimal} <strong>{props.nomeFamilia}</strong></p>
        </div>
    )
}

export default FamiliaMembro