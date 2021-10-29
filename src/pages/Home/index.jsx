import { useHistory } from "react-router"
<>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1MJESMFXHDD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'GA_MEASUREMENT_ID');
</script>
</>

export const Home = () => {

    

    const history = useHistory();

    const pathRelative = (path) => history.push(path)
    
    gtag('config', 'G-1MJESMFXHD')
    
    gtag('event', 'aaa', {
        'event_category' : 'bbb',
        'event_label' : 'ccc'
      });

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
