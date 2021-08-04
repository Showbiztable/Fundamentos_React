import "./TabelaProdutos.css"
import React from "react"

import listaProdutos from "../data/produtos"

const TabelaProdutos = () => {
    const novaListaProdutos = listaProdutos.map((elemento, index) => {
        return (
            <tr key={elemento.id} className={index % 2 === 0 ? "Par" : ""}>
                <td>{elemento.id}</td>
                <td>{elemento.nome}</td>
                <td>R$: {elemento.preco.toFixed(2).replace(".", ",")}</td>
            </tr>
        )
    })
    return (
        <div className="Tabela-Produtos">
            <table>
                <thead>
                    <tr>
                        <th>Id do Produto</th>
                        <th>Nome do Produto</th>
                        <th>Preço do Produto</th>
                    </tr>
                </thead>
                <tbody>
                    {novaListaProdutos}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaProdutos