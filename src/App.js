import { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import PropTypes from "prop-types";
import Input from "./Input";
import List from "./List";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [rerender, setRerender] = useState(false);

  const handleSubmit = () => {
    setList([...list, { todo: input, isComplete: false }]);
    setInput("");
  };

  const handleCompleted = (element, index) => {
    let newElement = element;
    let newList = list;
    newElement.isComplete = !element.isComplete;
    newList[index] = newElement;
    setList(newList);
    setRerender(true);
  };

  const handleDelete = (index) => {
    let newList = list;
    const removed = newList.splice(index , 1);
    setList(newList)
    setRerender(true)
  };

  useEffect(() => {
    setRerender(false);
    return () => {
      setRerender(false);
    };
  }, [rerender]);

  return (
    <div className="App">
      <Input input={input} />
      <Todo setInput={setInput} submit={handleSubmit} input={input} />
      <List list={list} completed={handleCompleted} fDelete={handleDelete}/>
    </div>
  );
}

App.prototype = {};

export default App;
