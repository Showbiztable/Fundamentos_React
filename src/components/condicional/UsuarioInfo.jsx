import React from "react"
import IfValidacao from "./IfValidacao"

const UsuarioInfo = (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <IfValidacao test={usuario && usuario.nome}>
                <p>Seja bem vindo <strong>{usuario.nome}</strong></p>
            </IfValidacao>
            <IfValidacao test={!usuario || !usuario.nome}>
                <p>Seja bem vindo usuário <strong>anônimo</strong></p>
            </IfValidacao>
        </div>
    )
}

export default UsuarioInfo