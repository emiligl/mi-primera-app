import React from "react";
import PropTypes from "prop-types";

import styles from "../../css/Button.module.css";
// import "./Saludar.css";
import "./Saludar.scss";

export default function Saludar(props) {
  console.log(props);
  // const { data } = props;
  // const {
  //   nombre = "Anónimo",
  //   apellidos = "Sin Apellidos",
  //   enviarSaludo,
  //   edad
  // } = data;

  const {
    data: { nombre, apellidos, edad, ciudad, enviarSaludo }
  } = props;

  const nombreCompleto = `Hola ${nombre} ${apellidos}, ¿cómo estás?`;

  return (
    <div className="saludar">
      <p className="nombre">
        <span> {nombreCompleto} </span>{" "}
      </p>{" "}
      <button className={styles.buttonError}> Error </button>{" "}
      <button className={styles.buttonCorrecto}> Correcto </button>
      {enviarSaludo && (
        <button
          style={{
            color: "blue"
          }}
          id="nombre"
          onClick={() => enviarSaludo(nombre, apellidos)}
        >
          Enviar Saludo!
        </button>
      )}{" "}
      <p className="creditos">
        <span> Créditos.... </span>{" "}
      </p>{" "}
    </div>
  );
}

// export default Saludar;

Saludar.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellidos: PropTypes.string.isRequired,
  enviarSaludo: PropTypes.func,
  edad: PropTypes.number
};
