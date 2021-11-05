import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import IngredientRoot from "./components//Ingredients/IngredientRoot";
import Recipes from "./components/Recipes/Recipes";
import "./homePage.css";
//import "./Liststyle.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./checkbox.scss";
import "./footer.css";
import "./Navbar.css";
//import { useState } from 'react';


function App() {

  
  return (
      <Router>
    <div>
      
    <Switch>
      <Route exact path='/' component={Home}/>    
      <Route path='/ingredients' component={IngredientRoot}/>
      <Route path='/recipes/:ingredients' component={Recipes} />
    </Switch>
    </div>
      </Router>
  );
}

export default App;
