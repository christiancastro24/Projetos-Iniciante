import axios from "axios"
import { useState } from "react"


export const GenerateRandomMeal = () => {

    const [meal, setMeal] = useState([])
    const [video, setVideo] = useState([])

    const handleGenerateRandomMeal = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => {setMeal(res.data.meals); setVideo([res.data.meals[0].strYoutube.replace("watch?v=", "embed/")])})
        .catch(err => console.error(err))
    }


    return (
        <div>
            <h2>Receitas aleatórias</h2>
            <button onClick={handleGenerateRandomMeal}>Gerar Receita</button>
            <br />   <br />
            <div>
                {meal.map(ref => (
                    <div style={{width: "1000px", padding: "0.7rem", backgroundColor: "#222", color: "#fff", margin: "0 auto"}}>
                        <h2> Nome: {ref.strMeal}</h2>
                        <img src={ref.strMealThumb} alt="meal" style={{width: "200px", borderRadius: "100%"}}/>
                        <h2>Passo a passo: {ref.strInstructions.slice(0, 150) + "..."}</h2> 

                {video.map(videoMeal => (
                    <div> 
                        <h1>Video</h1>      
                        <iframe width="553" title="Video" height="320" 
                        src={videoMeal}>
                        </iframe>
                    </div>
                ))}
                </div>
                ))}
            </div>
        </div>
    )
}