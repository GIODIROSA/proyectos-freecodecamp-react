import React from "react";
import "../stylesheets/Boton-clear.css"

const BotonClear = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>{props.children}</div>
);

export default BotonClear;
