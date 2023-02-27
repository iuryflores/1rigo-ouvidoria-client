import React from "react";

import { Button } from "react-bootstrap";

export const ButtonFinalizar = ({ tipo, handleFinalizar }) => {
  return (
    <Button
      variant="primary"
      value={`Finalizar ${tipo}`}
      type="submit"
      onClick={(e) => {
        handleFinalizar(e);
      }}
    >
      Finalizar {tipo}
    </Button>
  );
};
