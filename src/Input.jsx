import React, { useContext } from "react";
import { AppContext } from "./Store";

const Input = () => {
  const context = useContext(AppContext);
  const { state } = context;
  return (
    <div>
      <h2>{state.input}</h2>
    </div>
  );
};

export default Input;
