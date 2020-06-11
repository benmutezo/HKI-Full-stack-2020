import React from "react";

const Alert = ({ message, alertType }) => {
  if (message === null) {
    return null;
  }

  return <div className={alertType}>{message}</div>;
};

export default Alert;
