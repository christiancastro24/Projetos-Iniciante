import axios from "axios"
import { useState } from "react"

export const YourData = () => {

    const [data, setData] = useState([])


    const handleSeeData = () => {
        axios.get('http://ip-api.com/json')
        .then(res => {setData([res.data])})
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Seus dados</h1>
            <button onClick={handleSeeData}>Ver dados</button>
            
            {data.map(teste => (
                <div style={{width: "250px", backgroundColor: "#222", color: "#fff", margin: "0 auto"}}>
                <h4>País: {teste.country}</h4>
                <h4>Nome do seu proveder de internet: {teste.isp}</h4>
                <h4>Cidade: {teste.city}</h4>
                <h4>Seu IP: {teste.query}</h4>
                <h4>Estado: {teste.regionName}</h4>
            </div>
            ))} 
        </div>
    )
}