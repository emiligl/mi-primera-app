import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar/Saludar";
import Formulario from "./components/Formulario";
import LayoutBasic from "./components/LayoutBasic";
import HookExample from "./components/HookExample/HookExample";
import Car from "./components/Car/Car";

function App() {
  const enviarSaludo = (nombre, apellidos) => {
    console.log(`Hola ${nombre} - ${apellidos}! `);
  };

  const holaMundo = () => {
    return "Hola Mundo!";
  };

  const numero = () => {
    console.log(1);
  };

  const data = {
    nombre: "Emilio",
    apellidos: "De La Iglesia",
    edad: 36,
    ciudad: "Valladolid",
    enviarSaludo: { enviarSaludo }
  };

  return (
    <LayoutBasic>
      <div className="App">
        <h1 className="nombre">Mi primera App</h1>
        {holaMundo()}
        <button onClick={numero}>Click</button>
        <h1>Mi primer componente</h1>
        <h3>
          <Saludar
            // nombre="Emilio"
            // apellidos="De la Iglesia"
            // edad={36}
            // enviarSaludo={enviarSaludo}
            data={data}
          />
        </h3>
        {/* <h3>
        <Saludar nombre="Pilar" apellidos="Martín" edad="40" />
      </h3> */}
        <hr></hr>
        <h1>Formulario</h1>
        <Formulario />
        <hr></hr>
        <h1>Hook Example</h1>
        <HookExample />
        <hr></hr>
        <Car />
      </div>
    </LayoutBasic>
  );
}

export default App;
