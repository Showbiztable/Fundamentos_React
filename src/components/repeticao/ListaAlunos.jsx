import React from "react"

import alunos from "../data/aluno"

const ListaAlunos = (props) => {
    // const li1 = <li>{alunos[0].id}) <strong>{alunos[0].nomeAluno}</strong> tirou nota {alunos[0].notaAluno}</li>
    const lis1 = alunos.map(listaAluno => {
        return (
            <li key={listaAluno.id}>
                {listaAluno.id}) <strong>{listaAluno.nomeAluno}</strong> tirou nota {listaAluno.notaAluno}
            </li>
        )
    })
    return (
        <div>
            <ul style={{listStyle: "none"}}>
                {lis1}
            </ul>
        </div>
    )
}

export default ListaAlunos