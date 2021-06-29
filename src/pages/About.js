import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg"
import "../styles/About.css";

function About() {
    return (
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${MultiplePizzas})` }}
        >
          <h1>ABOUT US</h1>
        </div>
        <div className="aboutBottom">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            delectus aperiam placeat quo nulla dolore minus dicta ullam ad
            explicabo commodi illum, officia aliquam facere a voluptatibus. Id,
            quo voluptatum! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Inventore minus tempora blanditiis vero doloribus a eveniet
            corporis, neque ullam quos accusamus velit alias culpa eaque
            molestias, ipsum perferendis suscipit id. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Modi dignissimos doloribus beatae quis
            eaque. Neque natus necessitatibus earum sunt. Quas expedita velit
            sunt facere. Cumque provident possimus eius quo delectus?
          </p>
        </div>
      </div>
    );
}
export default About
