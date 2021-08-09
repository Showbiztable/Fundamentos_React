import React from "react"

const Formulario = (props) => {
    return (
        <div>
            <label htmlFor="novoPasso">Passo: </label>
            <input id="novoPasso" type="text" maxLength={6} value={props.passo} onChange={props.setPasso} />
        </div>
    )
}

export default Formulario