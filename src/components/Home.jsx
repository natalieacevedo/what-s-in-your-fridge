import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div class="div1">
      <div class="div2">
        <img
          src="https://trello.com/1/cards/61718dc0f612505e8ac74380/attachments/61718dd8fec2405241a934c8/download/first_idea_logo.png"
          alt="fridge"
          width="100%"
          height="100%"
        />
      </div>

      <div class="div3">
        <div class="middle">
          <a class="btn" href="#">
            <span class="wave"></span>
            <span class="text">
              <NavLink
                className="button1"
                activeClassName="active"
                to="/ingredientRoot"
              >
                Check Ingredients
              </NavLink>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
