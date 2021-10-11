import { useState } from "react"

export const IMC = () => {

  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")
  const [resultado, setResultado] = useState()
  const [mensagem, setMensagem] = useState()

  const handleImc = () => {
    const total = Number(peso / (altura * altura)).toFixed(2)

      if(total < 18.5) {
        setMensagem('Magreza')
    
    } else if(total >= 18.5 && total < 25)  {
      setMensagem('Peso normal')
    
    } else if(total >= 25 && total < 30) {
      setMensagem('Sobrepeso')
    
    } else if(total >= 30 && total < 40) {
      setMensagem('Obesidade')
    
    } else if(total >= 40) {
      setMensagem('Obesidade Grave')
    }
    
    setResultado(total)
  }


  return (
    <div>
        <h1>CALCULADORA IMC</h1>
      <input type="number" value={peso} onChange={evt => setPeso(evt.target.value)} />
      <input type="number" value={altura} onChange={evt => setAltura(evt.target.value)} />
      <div>
        <button onClick={handleImc}>Calcular IMC</button>
      </div>
      <hr />
      <h2>Seu IMC é: {resultado} <br /> Sua classificação é: {mensagem}</h2>
    </div>
  );
}

