import axios from "axios"
import { useState } from "react"

export const GeneratePhrase = () => {

    const [phrases, setPhrases] = useState([])

    const handleGeneratePhrase = () => {
        axios.get("https://allugofrases.herokuapp.com/frases/random")
        .then(res => setPhrases([res.data]))
        .catch(err => console.error(err))
    }

    return (
        <div>
            <h2>Gerador de frases com créditos</h2>

            <button onClick={handleGeneratePhrase}>GERAR FRASE</button>

            {phrases.map(phrase => (
                <div style={{width: "470px", backgroundColor: "#002", color: "#fff", padding: "10px", margin: "30px auto"}}>
                    <h3>Frase: {phrase.frase}</h3>
                    <h3>Livro: {phrase.livro}</h3>
                    <h3>Autor(a): {phrase.autor}</h3>
                </div>
                ))}
        </div>
    )
}