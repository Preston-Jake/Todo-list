import React, { useContext } from "react";
import { AppContext } from "./Store";

const Input = () => {
  const context = useContext(AppContext);
  const { input } = context;
  const [inputValue] = input;

  return (
    <div>
      <h2>{inputValue}</h2>
    </div>
  );
};

export default Input;
