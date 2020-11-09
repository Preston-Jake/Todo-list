import React, { useContext } from "react";
import { AppContext } from "./Store";

const Todo = () => {
  const context = useContext(AppContext);
  const { dispatch, state } = context;

  return (
    <div>
      <input
        type="text"
        name="Todo"
        id=""
        value={state.input}
        onChange={(event) => {
          const newInput = event.target.value;
          dispatch({ type: "onChange", payload: newInput });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "onSubmit" });
        }}
      >
        To Do
      </button>
    </div>
  );
};

Todo.propTypes = {};

export default Todo;
