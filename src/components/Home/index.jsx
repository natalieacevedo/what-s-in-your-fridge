import React from "react";
import { NavLink } from "react-router-dom";
import "./homePage.css";

const Home = () => {
  return (
    <div className="total-container">
      <div className="img-container">
        <img
          src="https://trello.com/1/cards/61969b6238caf307d4f81dad/attachments/61977224e8b35b6a6b128caa/download/finallogobig1newsize.png"
          alt="What's in your fridge?"
          id="fridge-img"
        />
      </div>

      <div className="home-button-container">
        <div className="center-buttons-middle">
          <a className="btn" href="#">
            <span className="wave"></span>
            <span className="text">
              <NavLink
                className="home-button-text-color"
                activeClassName="active"
                to="/ingredients/"
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
