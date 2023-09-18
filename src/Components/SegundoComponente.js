import React from "react";

export const SegundoComponente = () => {
  const libros = ["harry potter", "clean code", "juego de tronos"];
  return (
    <div className="segundo-componentes">
      <h1>Listado de libros</h1>
      {libros.length > 0 ? (
        <ul>
          {libros.map((libro, indice) => {
            return <li key={indice}>{libro}</li>;
          })}
        </ul>
      ) : (
        <p>No hay libros</p>
      )}
    </div>
  );
};
