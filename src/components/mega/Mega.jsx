import "./Mega.css"
import React from "react"

import Botao from "./Botao"

class Megasena extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resultado: [0, 0, 0, 0, 0, 0]
    }
    this.sortearNumeros = this.sortearNumeros.bind(this)
  }

  // algoritmo de Fisher-Yates para gerar números aleatórios não repetidos
  sortearNumeros() {
    const quantidadeNumeros = 60;
    const numeroGerado = []
    const numeroSorteado = []
    let i, p, n, tmp, x;
    const numberSort = (a, b) => a - b

    for (i = 0; i < quantidadeNumeros; i++) {
      numeroGerado[i] = i + 1
    }
    for (p = numeroGerado.length; p;) {
      n = Math.random() * p-- | 0;
      tmp = numeroGerado[n];
      numeroGerado[n] = numeroGerado[p];
      numeroGerado[p] = tmp;
    }
    for (x = 0; x < 6; x++) {
      numeroSorteado[x] = numeroGerado[x]
    }
    this.setState({
      resultado: numeroSorteado.sort(numberSort)
    })
  }

  render() {
    return (
      <div className="mega-sena">
        <div>
          <button className="numeros-sorteados">{this.state.resultado[0]}</button>
          <button className="numeros-sorteados">{this.state.resultado[1]}</button>
          <button className="numeros-sorteados">{this.state.resultado[2]}</button>
          <button className="numeros-sorteados">{this.state.resultado[3]}</button>
          <button className="numeros-sorteados">{this.state.resultado[4]}</button>
          <button className="numeros-sorteados">{this.state.resultado[5]}</button>
        </div><br />
        <Botao setResultado={this.sortearNumeros} />
      </div>
    )
  }
}

export default Megasena