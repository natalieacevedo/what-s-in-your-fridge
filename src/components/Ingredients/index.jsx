import { React ,useState } from "react";
import axios from "axios";
import IngredientList from "./IngredientList";
import IngredientSearch from "./IngredientSearch";
import IngredientSelected from "./IngredientSelected";
import Navbar1 from "../Navbar";
import Footer from "../Footer";

function IngredientRoot() {
  //its gonna  change when we have the search, search its going get the ingredients from the api and call setIngredientList

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
      .get(`http://localhost:5000/api/ingredients/${foodItem}`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((data) => {
        setIngredientList(data);
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
