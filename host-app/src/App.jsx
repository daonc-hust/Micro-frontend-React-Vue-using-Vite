import { useState } from "react";
import List from "todo_components/List";
import Input from "todo_components/Input";
import VueComponentWrapper from "./components/VueComponentWrapper.jsx";
// import HelloWorld from 'daonc/HelloWorld'

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onSubmit = () => {
    setTodos((prev) => [...prev, newTodo]);
    setNewTodo("");
  };

  return (
    <>
      <Input value={newTodo} onChange={setNewTodo} onSubmit={onSubmit} />
      <List items={todos} />
      <div id={'vue-micro'}>
        <VueComponentWrapper />
      </div>
      {/*<HelloWorld />*/}
    </>
  );
}

export default App;
