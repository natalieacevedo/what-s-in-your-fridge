import React from "react";
import AccordionFunctionality from "./Accordion";
import {
  Swiper,
  SwiperSlide,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";

function IngredientsList({
  ingredients,
  selectedIngredients,
  selectIngredient,
  removeIngredient,
}) {
  const items = ingredients.map((el) => {
    let selected = selectedIngredients.indexOf(el.name) !== -1;
    const onClick = () => {
      if (selected) {
        return removeIngredient(el.name);
      } else {
        return selectIngredient(el.name);
      }
    };
    return (
      <SwiperSlide>
        <IngredientListItem
          name={el.name}
          selected={selected}
          onClick={onClick}
        />
      </SwiperSlide>
    );
  });

  return (
    <div>
      <h1>Choose Ingredients Please</h1>

      <ul>
        <Swiper slidesPerView={5}>{items}</Swiper>
      </ul>

      <AccordionFunctionality
        selectIngredient={selectIngredient}
        removeIngredient={removeIngredient}
        selectedIngredients={selectedIngredients}
      />
    </div>
  );
}

function IngredientListItem({ name, selected, onClick }) {
  return (
    <div id="container">
      <ul id="first-swiper">
        <li key={name} onClick={onClick}>
          <label>{name}</label>
          <input
            className="checkbox-input"
            type="checkbox"
            checked={selected}
          />

          <span className="checkbox-checkmark-box">
            <span className="checkbox-checkmark"> </span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default IngredientsList;
