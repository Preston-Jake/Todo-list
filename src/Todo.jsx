import React, { useContext } from "react";
import { AppContext } from "./Store";

const Todo = () => {
  const context = useContext(AppContext);
  const { list, input } = context;
  const [listValue, setList] = list;
  const [inputValue, setInput] = input;

  const handleSubmit = () => {
    setList([...listValue, { todo: inputValue, isComplete: false }]);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        name="Todo"
        id=""
        value={inputValue}
        onChange={(event) => {
          const input = event.target.value;
          setInput(input);
        }}
      />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        To Do
      </button>
    </div>
  );
};

Todo.propTypes = {};

export default Todo;
