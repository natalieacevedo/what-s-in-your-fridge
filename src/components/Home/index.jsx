import React from "react";
import { NavLink } from "react-router-dom";
import "./homePage.css";
import HomeImage from "../../images/finallogobig1newsize.png"

const Home = () => {
  return (
    <div className="total-container">
      <div className="img-container">
        <img src={HomeImage} alt="What's in your fridge?" id="fridge-img" />
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
