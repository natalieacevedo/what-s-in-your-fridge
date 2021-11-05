import {  Switch, Route } from "react-router-dom";
import IngredientRoot from "./components/Ingredients";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import "./components/Home/homePage.css";
import "./components/Footer/Footer.css";
import "./components/Navbar/Navbar.css";
import "./checkbox.scss";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {

  
  return (
     
    <>
      
    <Switch>
      <Route exact path='/' component={Home}/>    
      <Route path='/ingredients' component={IngredientRoot}/>
      <Route path='/recipes/:ingredients' component={Recipes} />
    </Switch>
    </>
      
  );
}

export default App;
