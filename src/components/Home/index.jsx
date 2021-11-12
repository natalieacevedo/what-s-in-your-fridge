import React from "react";
import { NavLink } from "react-router-dom";
import "./homePage.css";

const Home = () => {
  return (
    <div className="totalContainer">
      <div className="imgContainer">
        <img
          src="https://trello.com/1/cards/61718dc0f612505e8ac74380/attachments/61718dd8fec2405241a934c8/download/first_idea_logo.png"
          alt="What's in your fridge?"
          id="fridgeImg"
        />
      </div>

      <div className="homeButtonContainer">
        <div className="centerButtonsMiddle">
          <a className="btn" href="#">
            <span className="wave"></span>
            <span className="text">
              <NavLink
                className="HomeButtonTextColor"
                activeClassName="active"
                to="/ingredients"
              >
                <h2>Check Ingredients</h2>
              </NavLink>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
