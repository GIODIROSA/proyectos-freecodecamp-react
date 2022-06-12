import React from "react";
import logoFreecodeCamp from "../imagenes/logo-freecodecamp.png";

function Logo() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={logoFreecodeCamp}
        className="freecodecamp-logo"
        alt="logo de freecodecamp"
      />
    </div>
  );
}

export default Logo;
