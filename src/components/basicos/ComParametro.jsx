import React from "react"

export default function ComParametro(props) {
    const situacao = props.nota >= 7 ? "Aprovado" : "Reprovado"
    return (
        <div>
            <h2>Situação do Aluno</h2>
            <p>
                A nota do aluno <strong>{props.aluno}</strong> foi <strong>{props.nota}</strong>, logo ele está <strong>{situacao}</strong>
            </p>
        </div>
    )
}