import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const Store = ({ children }) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [rerender, setRerender] = useState(false);

    useEffect(() => {
    setRerender(false);
    return () => {
      setRerender(false);
    };
  }, [rerender]);

  return (
    <AppContext.Provider
      value={{ input: [input, setInput], list: [list, setList], rerender: [rerender, setRerender] }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
