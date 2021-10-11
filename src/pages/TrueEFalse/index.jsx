import { useState } from "react"

export const TrueEFalse = () => {

    const [resultadoOne, setResultadoOne] = useState("Carregando...")
    const [resultadoTwo, setResultadoTwo] = useState("Carregando...")
    const [valueOne, setValueOne] = useState("")
    const [valueTwo, setValueTwo] = useState("")
    const [valueThree, setValueThree] = useState("")
    const [valueFour, setValueFour] = useState("")

    const handleEval = () => {
        const triplaIgualdade = valueOne === valueTwo
        
        if(triplaIgualdade) {
            setResultadoOne("True")
            
        } else {
            setResultadoOne("False")
        }
    }
    
    const handleResult = () => {
        const duplaIgualdade = valueOne == valueTwo

        if(duplaIgualdade) {
            setResultadoTwo("False")

        } else {
            setResultadoTwo("True")
        }
    }
    return (
        <div>
            <h1>Comparar tripla igualdade</h1>
            <br /> <br />
            <input type="text" value={valueOne} onChange={evt => setValueOne(evt.target.value)} /> é igual a ?{" "}
            <input type="text" value={valueTwo} onChange={evt => setValueTwo(evt.target.value)} />

            <button onClick={handleEval}>Conferir</button>
            <h2>Resultado: {resultadoOne}</h2>

            <hr />

            <h1>Comparar dupla igualdade</h1>
            <br /> <br />
            <input type="text" value={valueThree} onChange={evt => setValueThree(evt.target.value)} /> é igual a ?{" "}
            <input type="text" value={valueFour} onChange={evt => setValueFour(evt.target.value)} />

            <button onClick={handleResult}>Conferir</button>
            <h2>Resultado: {resultadoTwo}</h2>
        </div>
    )
}