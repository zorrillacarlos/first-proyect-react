import React from "react";

export const EventoComponente = () => {
  const dadoClick = (name) => {
    console.log(`hizo click ${name}`);
  };
  const hacerAccion = (e, accion) => {
    console.log(`HAZ ENTRADO con ${accion}`);
  };
  const estasDentro = (e) => {
    console.log(`ESTAS ${e._reactName} DEL INPUT`);
  };
  return (
    <div>
      <h1>EventoComponente</h1>
      <button onClick={(e) => dadoClick("Carlos")}>CLICK</button>
      <br />
      <br />
      <button onDoubleClick={(e) => dadoClick("Pepito")}>DOBLE CLICK</button>
      <br />
      <br />
      {/* cuando se quiera capturar el evento se debe hacer una funcion anonima declarando al evento */}
      <p
      onMouseEnter={(e) => hacerAccion(e, "onMouseEnter")}
      onMouseLeave={(e) => hacerAccion(e, "onMouseLeave")}
      >
        PASA ENCIMA
      </p>
      <p>
        <input
          type="text"
          placeholder="ingresa tu nombre"
          onFocus={estasDentro}
          onBlur={estasDentro}
        />
      </p>
    </div>
  );
};
