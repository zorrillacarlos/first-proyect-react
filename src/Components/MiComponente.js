// importar modulos de react / dependencias
import React, { Fragment } from "react";

// funcion del componente
const MiComponente = () => {
  let web = "www.carloszorrilla.com";
  const nombre = "carlos";
  let usuario = {
    nombre: "juan",
    web: "www.juan.com",
  };
  console.log(usuario);
  return (
    <div className="mi-componente">
      <hr />
      <h2>
        Mi nombre es {nombre} y mi web es {web}
      </h2>
      <h3>
        {usuario.nombre}, {usuario.web}
      </h3>
      <p>Este es mi primer componente</p>
      <p>Este es otro texto para probar fragment</p>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
      </ul>
    </div>
  );
};

// otra forma que se puede declarar el componente
// function MiComponente () {

// }

// Export
export default MiComponente;
