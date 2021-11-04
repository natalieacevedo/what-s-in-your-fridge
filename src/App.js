import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import IngredientRoot from "./components//Ingredients/IngredientRoot";
import Recipes from "./components/Recipes/Recipes";
import "./homePage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/ingredients/ingredientRoot"
            component={IngredientRoot}
          />
          <Route path="/recipes" component={Recipes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
