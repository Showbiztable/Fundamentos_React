import React, { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"

const IndiretaPai = (props) => {
    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <p>Componente Pai</p>
            <p>{nome}, {idade}, {nerd ? "Verdadeiro" : "False"}</p>            
            <IndiretaFilho quandoClicar={fornecerInformacoes} />
        </div>
    )
}

export default IndiretaPai