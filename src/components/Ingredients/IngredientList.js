import React from "react";
import AccordionFunctionality from "./Accordion";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "./ingredient.module.css";

SwiperCore.use([Navigation]);

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
      <h1 className="mainIngredientTitle">Choose Ingredients Please</h1>

      <ul className="search-ul">
        <Swiper
          spaceBetween={1}
          className="swiper-search"
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            375: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          <div className="swiper-items">{items}</div>
        </Swiper>
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
