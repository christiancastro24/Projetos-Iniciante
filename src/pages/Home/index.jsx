import { useHistory } from "react-router"

export const Home = () => {

    const history = useHistory();

    const pathRelative = (path) => history.push(path)

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => pathRelative("/findYourBook")}>Encontre seu livro</button>
            <button onClick={() => pathRelative("/generatePhrase")}>Gerador de Frases</button>
            <button onClick={() => pathRelative("/generateRandomMeal")}>Gerador de refeições</button>
            <button onClick={() => pathRelative("/IMC")}>Calculadora IMC</button>
            <button onClick={() => pathRelative("/YourData")}>Seus dados</button>
            <button onClick={() => pathRelative("/SayHello")}>Olá em seu país</button>
            <button onClick={() => pathRelative("/todoList")}>Lista de tarefas</button>
            <button onClick={() => pathRelative("/trueEfalse")}>Comparações em JS</button>
        </div>
    )
}