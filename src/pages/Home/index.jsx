import { useHistory } from "react-router"

<script async src="https://www.googletagmanager.com/gtag/js?id=G-1MJESMFXHDD"></script>

export const Home = () => {
 
    const history = useHistory();

    const pathRelative = (path) => history.push(path)
    
    //  Desativar a visualização da página
    //   gtag('config', 'G-1MJESMFXHDD', {
    //     send_page_view: false
    //   });

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => {pathRelative("/findYourBook")}}>Encontre seu livroo</button>
            <button onClick={() => pathRelative("/generatePhrase")}>Gerador de Frases</button>
            <button onClick={() => pathRelative("/generateRandomMeal")}>Gerador de refeições</button>
            <button onClick={() => pathRelative("/IMC")}>Calculadora IMC</button>
            <button onClick={() => pathRelative("/YourData")}>Seus dados</button>
            <button onClick={() => pathRelative("/SayHello")}>Olá em seu país</button>
            <button onClick={() => pathRelative("/todoList")}>Lista de tarefas</button>
            <button onClick={() => pathRelative("/trueEfalse")}>Comparações em JS</button>
            <a href="https://google.com.br" alt="google">TESTE</a>
        </div>
    )
}
