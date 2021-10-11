import axios from "axios"
import { useState } from "react"

export const SayHello = () => {

    const [data2, setData2] = useState("")
    const [hellou, setHello] = useState([])

    const sayHello = () => {
      axios.get(`https://fourtonfish.com/hellosalut/?cc=${data2}`)
        .then(res => setHello(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div>
             <button onClick={() => sayHello(data2)}>Dar oi</button>
        <input type="text" placeholder="Digite um país e receba um Olá no país" value={data2} onChange={evt => setData2(evt.target.value)} />
        <br />
        <h2>dando alo: {hellou.hello}</h2>

        <h1>Países suportados</h1>

        <h3>Países</h3>
        <p>Afeganistão, Albânia, Samoa Americana, Andorra, Angola, Anguila, Antártica, Antígua e Barbuda, Argentina, Armênia, Aruba, Austrália, Áustria, Azerbaijão, Bahamas, Bahrein, Bangladesh, Barbados, Bielo-Rússia, Bélgica, Benin, Bermuda, Bolívia, Bósnia e Herzegovina, Brasil, Território Britânico do Oceano Índico, Brunei Darussalam, Bulgária, Burkina Faso, Burma (Mianmar), Burundi, Camboja, Canadá, Chile, China, Colômbia, Croácia, Chipre, República Tcheca, Dinamarca, Egito, Estônia, Europa, Finlândia, França, Guiana Francesa, Polinésia Francesa, Territórios Franceses do Sul, Geórgia, Alemanha, Grécia, Guiana, Hong Kong, Hungria, Islândia, Índia, Indonésia, Irlanda, Israel, Itália, Jamaica, Japão, Cazaquistão, Quênia, Coreia (Norte ), Coreia (Sul), Laos, Letônia, Lituânia, Luxemburgo, Macedônia, Malásia, Malta, México, Mongólia, Nepal, Holanda, Antilhas Holandesas,Nova Zelândia, Níger, Noruega, Omã, Paquistão, Peru, Filipinas, Polônia, Portugal, Porto Rico, República da Sérvia, Romênia, Rússia, Arábia Saudita, Sérvia e Montenegro, Cingapura, República Eslovaca, Eslovênia, África do Sul, Espanha, Suécia , Suíça, Taiwan, Tailândia, Turquia, Ucrânia, Emirados Árabes Unidos, Reino Unido, Estados Unidos, Uruguai, Venezuela, Vietnã, Ilhas Virgens (britânicas) e Ilhas Virgens (EUA)</p>

        <p>
        ar, az, be, bg, bn, bs, cs, da, de, dz, el, en, en-gb, en-us, es, et, fa, fi, fil, fr, he, hi, hr, hu, hy, id, is, it, ja, ka, kk, km, ko, lb, lo, lt, lv, mk, mn, ms, meu, ne, no, pl, pt, ro, ru, sk, sl, sq, sr, sv, sw, th, tk, uk, vi, zh
        </p>            
    </div>

    )
}