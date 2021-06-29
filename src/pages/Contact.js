import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import Buttons from "../components/Buttons";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name" className="">
            Full Name
          </label>
          <input type="text" name="name" placeholder="Enter Full Name..." />
          <label htmlFor="email" className="">
            Email
          </label>
          <input type="email" placeholder="Enter your Email..." name="email" />
          <label htmlFor="message" className="">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="40"
            rows="6"
            placeholder="Enter your Message..."
            required
          ></textarea>
          <Buttons type="submit" buttonSize="btn--small" buttonStyle="btn--dark">Send</Buttons>
        </form>
      </div>
    </div>
  );
}

export default Contact;
