import React from "react";
import freeCodeCampLogo from "../imagenes/logo-freecodecamp.png";
import "../stylesheets/Logo.css";

function Logo() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={freeCodeCampLogo}
        className="freecodecamp-logo"
        alt="logo de freecodecamp"
      />
    </div>
  );
}

export default Logo;
