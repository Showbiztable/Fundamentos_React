import "./App.css"
import React from "react"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragment from "./components/basicos/Fragment"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"

const tag4 = (<div className="texto-cor-vermelho">
    <strong>JSX - JavaScript XML</strong><br />
    <strong>Permite escrever códigos HTML em React</strong><br />
    <strong>JSX converte as tags HTML para elementos do react</strong>
</div>);

const App = () => {
    return (
        <div className="App">
            <h1 style={{ textAlign: "center" }}>Fundamentos React</h1>
            {/* <strong>Hello World !!!</strong><br /> */}
            {tag4}
            <hr />
            <div className="All-Cards">
                <Card titulo="Componente Primeiro" color="#239e00">
                    <Primeiro />
                </Card>
                <Card titulo="Componente Com Parâmetro" color="#bc218e">
                    <ComParametro aluno="Lucas" nota={5.6}></ComParametro>
                </Card>
                <Card titulo="Componente Fragment" color="#1c21fe">
                    <Fragment />
                </Card>
                <Card titulo="Componente Aleatorio" color="#ff9331">
                    <Aleatorio min={1} max={60}></Aleatorio>
                </Card>
                <Card titulo="Componente com Filhos" color="#00C8F8">
                    <Familia nomeFamilia="Obama">
                        <FamiliaMembro nomePai="Pedro" nomeMae="Ana" nomeAnimal="Gertrudez"></FamiliaMembro>
                    </Familia>
                </Card>
                <Card titulo="Repetição Lista Alunos" color="#351691">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="Repetição Tabela Preços" color="#B4B7E7">
                    <TabelaProdutos />
                </Card>
                <Card titulo="Renderização Condicional" color="#982395">
                    <ParOuImpar numero={20}/>
                    <UsuarioInfo usuario={{nome: "Abreu"}} />
                    <UsuarioInfo usuario={{email: "abreu@domain.com"}} />
                    <UsuarioInfo />
                </Card>
            </div>
        </div>
    )
}

export default App

// export default function App(props) {
//     return (
//         <div>
//             <h1>Fundamentos React</h1>
//             {/* <strong>Hello World !!!</strong><br /> */}
//             {tag4}
//             <hr />
//             <Primeiro />
//             <hr />
//             <ComParametro aluno="Lucas" nota={5, 6}></ComParametro>
//             <hr />
//             <Fragment />
//         </div>
//     )
// }