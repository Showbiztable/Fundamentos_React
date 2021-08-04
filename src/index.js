import "./index.css"
import ReactDOM from "react-dom"
import React from "react"

/*import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragment from "./components/basicos/Fragment"*/
import App from "./App"

const elemento = document.getElementById("root")
/*ReactDOM.render("Hello World!!!", elemento)

const tag1 = <strong>JSX - JavaScript XML</strong>
const tag2 = <strong>Permite escrever códigos HTML em React</strong>
const tag3 = <strong>JSX converte as tags HTML para elementos do react</strong>
ReactDOM.render(
    <div>
        <strong>Hello World !!!</strong><br/>
        { tag1 }<br/>
        { tag2 }<br/>
        { tag3 }
    </div>,
    elemento
)

const tag4 = (<div className="cor-texto">
    <strong>JSX - JavaScript XML</strong><br />
    <strong>Permite escrever códigos HTML em React</strong><br />
    <strong>JSX converte as tags HTML para elementos do react</strong>
</div>);
ReactDOM.render(
    <div>
        <strong>Hello World !!!</strong><br />
        {tag4}
        <hr />
        <Primeiro />
        <hr />
        <ComParametro aluno="Lucas" nota={5, 6}></ComParametro>
        <hr />
        <Fragment />
    </div>,
    elemento
)*/

ReactDOM.render(
    <App/>, elemento
)