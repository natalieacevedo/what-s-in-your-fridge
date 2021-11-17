import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "../Home/homePage.css";
import styles from "./ingredient.module.css";

function IngredientSelected({ ingredients, removeIngredient }) {
  const history = useHistory();
  console.log(ingredients);
  function handleClick() {
    alert("Select Ingredients");
  }

  return (
    <div>
      <h3 className={styles.ingredients_h3}>Selected ingredients:</h3>

      <ul className={styles.selected_container}>
        <Swiper
          breakpoints={{
            320: { slidesPerView: 2 },
            375: { slidesPerView: 3 },
            480: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
          }}
        >
          {ingredients.map((el) => (
            <SwiperSlide>
              <li
                className={styles.ingredient_selected}
                onClick={(e) => {
                  console.log(e.target.textContent);
                  removeIngredient(e.target.textContent);
                }}
              >
                {el}
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>

      <div className="center-buttons-middle">
        <a className="btn-search">
          <span className="wave"></span>
          <span
            className="text btn-search"
            id="button-text-color"
            onClick={() =>
              ingredients.length <= 0
                ? handleClick()
                : history.push(`/recipes/${ingredients.join(",")}`)
            }
          >
            Get your delicious Recipes
          </span>
        </a>
      </div>
    </div>
  );
}

export default IngredientSelected;
