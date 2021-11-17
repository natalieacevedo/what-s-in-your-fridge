import { Switch, Route } from "react-router-dom";
import IngredientRoot from "./components/Ingredients";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import "bootstrap/dist/css/bootstrap.min.css";
import Favorite from "./components/Favorites/index";
import {FavoriteContextProvider } from "./components/Context/FavoriteContext";


function App() {
  return (
    <FavoriteContextProvider>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ingredients/">
          <IngredientRoot />
        </Route>
        <Route path="/recipes/:ingredients" component={Recipes} />
        <Route path="/favorites">
          <Favorite/>
        </Route>
      </Switch>
      </FavoriteContextProvider>
  );
};

export default App;
