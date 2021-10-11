import { Switch, Route } from "react-router"
import { FindYourBook } from "../pages/FindYourBook"
import { GeneratePhrase } from "../pages/GeneratePhrase"
import { GenerateRandomMeal } from "../pages/GenerateRandomMeal"
import { Home } from "../pages/Home"
import { IMC } from "../pages/IMC"
import { SayHello } from "../pages/SayHello"
import { TodoList } from "../pages/TodoList"
import { TrueEFalse } from "../pages/TrueEFalse"
import { YourData } from "../pages/YourData"

export const Routes = () => {
    return (
        <div>
            <Switch>           
                <Route exact path="/"> 
                    <Home /> 
                </Route>

                <Route path="/findYourBook"> 
                    <FindYourBook /> 
                </Route>

                <Route path="/generatePhrase"> 
                    <GeneratePhrase /> 
                </Route>

                <Route path="/generateRandomMeal"> 
                    <GenerateRandomMeal /> 
                </Route>

                <Route path="/IMC"> 
                    <IMC /> 
                </Route>

                <Route path="/YourData"> 
                    <YourData /> 
                </Route>

                <Route path="/SayHello"> 
                    <SayHello /> 
                </Route>

                <Route path="/todoList"> 
                    <TodoList /> 
                </Route>

                <Route path="/trueEfalse"> 
                    <TrueEFalse /> 
                </Route>
            </Switch>
        </div>
    )
}