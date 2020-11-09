import "./App.css";
import Todo from "./Todo";
import Input from "./Input";
import List from "./List";
import Store from "./Store";

function App() {
  return (
    <Store>
      <div className="App">
        <Input />
        <Todo />
        <List />
      </div>
    </Store>
  );
}

export default App;
