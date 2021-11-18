import { Switch, Route } from "react-router-dom";
import IngredientRoot from "./components/Ingredients";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import "bootstrap/dist/css/bootstrap.min.css";
import Favorite from "./components/Favorites/index";
import 'react-toastify/dist/ReactToastify.css'
import {FavoriteContextProvider } from "./components/Context/FavoriteContext";


function App() {
  return (
    <FavoriteContextProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ingredients/" component={IngredientRoot} />
        <Route path="/recipes/:ingredients" component={Recipes} />
        <Route path="/favorites" component={Favorite} />
      </Switch>
      </FavoriteContextProvider>
  );
};

export default App;
