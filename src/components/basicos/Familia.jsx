import React from "react"

// import FamiliaMembro from "./FamiliaMembro"

// const arrayOne = [1, 2, 5];
// let arrayDiferente = arrayOne.map(function (elemento) {
//     return elemento + 1;
// })
//arrayDiferente // [2, 3, 6]

const Familia = (props) => {
    return (
        <div>
            {
                React.Children.map(props.children, index => {
                    return React.cloneElement(index, { ...props })
                })
            }
        </div>
    )
}

export default Familia

/* <div>
    <FamiliaMembro nomePai="João" nomeMae="Ana" nomeAnimal="Gertrudes" {...props}/>
</div> */