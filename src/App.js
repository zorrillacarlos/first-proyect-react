// import logo from "./logo.svg";
import "./App.css";
import MiComponente from "./Components/MiComponente";
import { SegundoComponente } from "./Components/SegundoComponente";
import { TercerComponente } from "./Components/TercerComponente";
import { EventoComponente } from "./Components/EventoComponente";

function App() {
  const ficha = {
    peso: "99kg",
    estatura: "1.78mts",
    edad: 34,
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Bienvenido Primera app en React</p>
        <EventoComponente />
        <TercerComponente
          nombre="Carlos"
          apellido="Zorrilla"
          cargo="Frontend"
          ficha={ficha}
        />
        <SegundoComponente />
        <MiComponente />
      </header>
    </div>
  );
}

export default App;
