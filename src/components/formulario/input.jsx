import React, { useState } from "react"

const InputFormulario = () => {
    const [valor, setValor] = useState("Inicial")

    function quandoMudar(event) {
        //console.log(event.target.value)
        setValor(event.target.value)
    }

    return (
        <div>
            <p>Hello World</p>
            <input type="text" value={valor} onChange={quandoMudar}/>
            <input type="text" readOnly/>
            <input type="text" value={undefined}/>
        </div>
    )
}

export default InputFormulario