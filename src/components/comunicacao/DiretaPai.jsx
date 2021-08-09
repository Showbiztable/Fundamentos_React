import React from "react"

import DiretaFilho from "./DiretaFilho"

const DiretaPai = (props) => {
    return (
        <div>
            <DiretaFilho nome={"Drake"} idade={23} bool={false} />
            <DiretaFilho nome={"Josh"} idade={27} bool={true} />
        </div>
    )
}

export default DiretaPai