import React, { createContext, useEffect, useReducer, useState } from "react";
import List from "./List";

export const AppContext = createContext();

const initialState = {
  input: "",
  list: [],
  rerender: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "onChange": {
      return { ...state, input: action.payload };
    }
    case "onSubmit": {
      return {
        ...state,
        list: [...state.list, { todo: state.input, isComplete: false }],
        input: "",
      };
    }
    case "onToggle": {
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.id
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };
    }
    case "onDelete": {
      return {
        ...state,
        list: state.list.filter((todo, index) => index !== action.index),
      };
    }
    default: {
      return { ...state };
    }
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
