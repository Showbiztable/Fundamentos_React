import "./Contador.css"
import React from "react"

import Display from "./Display"
import Formulario from "./Formulario"
import Botoes from "./Botoes"

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: props.numeroInicial || 0,
            passo: props.passoInicial || 5
        }

        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
        this.setPasso = this.setPasso.bind(this)
    };

    incrementar() {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    decrementar() {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    setPasso = (event) => {
        const valor = event.target.value
        const novoValor = valor.length <= 6 ? valor : valor.toString().substring(0, 6)

        this.setState({
            passo: parseInt(novoValor) || 5
        })
    }

    render() {
        //const {passo} = this.state;
        return (
            <div className="Contador">
                <Display setValor={this.state.valor}/><br />
                <Formulario passo={this.state.passo} setPasso = {this.setPasso}/>
                <Botoes incrementar={this.incrementar} decrementar={this.decrementar}/>
            </div>
        )
    };
}

export default Contador

// const Contador = () => {

//     return (
//         <p>Hello World</p>
//     )
// }