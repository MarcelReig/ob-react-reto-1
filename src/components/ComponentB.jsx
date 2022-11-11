import React from "react";
import PropTypes from "prop-types";

const ComponentB = ({ setContact }) => {
  const changeState = () => {
    setContact((prevContact) => {
      return {
        ...prevContact,
        conected: !prevContact.conected,
      };
    });
  };

  return (
    <div>
      <button onClick={changeState}>Cambiar estado</button>
    </div>
  );
};

ComponentB.propTypes = {
  setContact: PropTypes.func,
};

export default ComponentB;