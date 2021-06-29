import React from "react";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";
import bannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="headerContainer">
        <h1> Pedro's Pizzeria</h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <Buttons buttonStyle="btn--dark" buttonSize="btn--small">
            ORDER NOW
          </Buttons>
        </Link>
      </div>
    </div>
  );
}

export default Home;
