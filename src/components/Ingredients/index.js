import { React, useState,useContext } from "react";
import axios from "axios";
import IngredientList from "./IngredientList";
import IngredientSearch from "./IngredientSearch";
import IngredientSelected from "./IngredientSelected";
import Navbar1 from "../Navbar";
import Footer from "../Footer";
import "../Home/homePage.css";
import "../../checkbox.scss";
import "swiper/swiper.scss";
import "./ingredient.module.css";
import FavoriteContext from "../Context/FavoriteContext";

function IngredientRoot() {
  
  const { key } = useContext(FavoriteContext);

  console.log(key);

  const [ingredientList, setIngredientList] = useState([]);
  //the ones are gonna be displayed after the list
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  function selectIngredient(name) {
    setSelectedIngredients((prevState) =>
      prevState.indexOf(name) === -1 ? prevState.concat([name]) : prevState
    );
  }

  function removeIngredient(name) {
    setSelectedIngredients((prevState) =>
      prevState.filter((el) => el !== name)
    );
  }

  
  function searchIngredients(foodItem) {
    axios
      .get(`https://api.spoonacular.com/food/ingredients/search?apiKey=${key}&query=${foodItem}&number=10`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((data) => {
        console.log(data.results)
        setIngredientList(data.results);
      });
  }
  return (
    <div>
      <Navbar1 />
      <IngredientSearch searchIngredients={searchIngredients} />

      <IngredientList
        ingredients={ingredientList}
        selectedIngredients={selectedIngredients}
        selectIngredient={selectIngredient}
        removeIngredient={removeIngredient}
      />

      <IngredientSelected
        ingredients={selectedIngredients}
        removeIngredient={removeIngredient}
      />

      <Footer />
    </div>
  );
}

export default IngredientRoot;
