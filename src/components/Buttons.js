import React from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css"

const SIZES = ["btn--large", "btn--medium", "btn--small"];

const STYLES = ["btn--outline", "btn--primary", "btn--dark"];

function Buttons({ buttonStyle, buttonSize, children, type, onClick }) {
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle}  ${checkButtonSize}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}

export default Buttons;
