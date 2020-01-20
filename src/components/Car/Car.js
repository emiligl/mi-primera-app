import React, { useState, useEffect } from "react";

export default function Car() {
  //   const [started, setStarted] = useState(false);
  //   const [countKm, setCountKm] = useState(0);
  const km = 1;
  const [carState, setCarState] = useState({
    started: false,
    countKm: 0
  });

  const checkStateCar = () => {
    if (carState.started) {
      return <span style={{ color: "green" }}>encendido</span>;
    }
    return <span style={{ color: "red" }}>apagado</span>;
  };

  const increaseKm = num => {
    if (carState.started) {
      setCarState({
        ...carState,
        countKm: carState.countKm + num
      });
      if (carState.countKm + num === 0)
        setCarState({
          ...carState,
          countKm: carState.countKm + num,
          started: false
        });
    } else alert("El coche está apagado!");
  };

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `You run ${carState.countKm} km.`;
  });

  return (
    <div>
      {/* <h2>Nuestro coche está: {started ? "encendido" : "apagado"} </h2> */}
      <h2>Nuestro coche está: {checkStateCar()} </h2>
      <h2>Km recorridos: {carState.countKm} km.</h2>
      <button
        onClick={() => {
          setCarState({
            ...carState,
            started: !carState.started
          });
        }}
      >
        Encender / Apagar
      </button>
      <button
        onClick={() => {
          increaseKm(km);
        }}
      >
        Sumar 1Km.
      </button>
      <button
        onClick={() => {
          increaseKm(-km);
        }}
      >
        Restar {km} Km.
      </button>
    </div>
  );
}
