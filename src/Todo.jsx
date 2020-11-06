import React from "react";

const Todo = (props) => {
  const { setInput, submit, input } = props;
  return (
    <div>
      <input
        type="text"
        name="Todo"
        id=""
        value={input}
        onChange={(event) => {
          const input = event.target.value;
          setInput(input);
        }}
      />
      <button
        onClick={() => {
          submit();
        }}
      >
        To Do
      </button>
    </div>
  );
};

Todo.propTypes = {};

export default Todo;
