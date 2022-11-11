import React from "react";
import PropTypes from "prop-types";
import ComponentB from "./ComponentB";

const ComponentA = ({ contact, setContact }) => {
  return (
    <div>
      <h3>Nombre: {contact.name}</h3>
      <h3>Apellido: {contact.surname}</h3>
      <h3>Email: {contact.email}</h3>
      <h3>
        Conectado:{" "}
        {contact.conected ? "Contacto En Línea" : "Contacto No Disponible"}
      </h3>

      <ComponentB setContact={setContact}></ComponentB>
    </div>
  );
};

ComponentA.propTypes = {
  contact: PropTypes.object,
  setContact: PropTypes.func,
};

export default ComponentA;