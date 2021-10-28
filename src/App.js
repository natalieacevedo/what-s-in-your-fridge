import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import IngredientRoot from "./components/IngredientRoot";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import "./homePage.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ingredientRoot">
            <IngredientRoot name="natita" />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
