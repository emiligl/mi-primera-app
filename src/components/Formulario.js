import React from "react";

export default function Formulario() {
  const pepe = "Hola";

  return (
    <form>
      <FormInput
        title="Email"
        name="email"
        type="email"
        placeholder="Escribe tu correo electrónico"
      />
      <FormInput
        title="Contraseña"
        name="password"
        type="password"
        placeholder="Escribe tu contraseña"
      />
      <br />
      <FormButtonSend />
    </form>
  );
}

function FormInput(props) {
  const { title, name, type, placeholder } = props;
  return (
    <div>
      <label>{title} </label>
      <input name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

function FormButtonSend() {
  return <button>Enviar</button>;
}
