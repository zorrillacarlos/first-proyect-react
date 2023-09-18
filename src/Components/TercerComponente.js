import React from "react";
import PropTypes from "prop-types";

export const TercerComponente = ({ nombre, apellido, cargo, ficha }) => {
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Cargo: {cargo}</p>
      <p>Edad: {ficha.edad}</p>
    </div>
  );
};

TercerComponente.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  ficha: PropTypes.object,
};

TercerComponente.defaultProps = {
  nombre: "Juanito",
  apellido: "Perez",
}