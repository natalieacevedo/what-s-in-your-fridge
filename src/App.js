import { Switch, Route } from "react-router-dom";
import IngredientRoot from "./components/Ingredients";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import "./checkbox.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      
    <Switch>
      <Route exact path='/' >
        <Home />
      </Route>    
      <Route path='/ingredients' >
        <IngredientRoot />
      </Route>
      <Route path='/recipes/:ingredients'  component={Recipes}/>
    </Switch>
    </>
  );
}

export default App;
