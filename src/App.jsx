import TodoHeading from "./components/TodoHeading";
import SetTodo from "./components/SetTodo";
import Todos from "./components/Todos";
import EmptyTodo from "./components/EmptyTodo";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onHandleClick = (inputText, inputDate) => {
    const newTodos = [
      ...todos,
      {
        id: uuidv4(),
        text: inputText,
        date: inputDate,
      },
    ];
    setTodos(newTodos);
  };

  const onHandleDelete = (id) => {
    const newTodoList = todos.filter((i) => {
      return i.id !== id;
    });
    setTodos(newTodoList);
  };

  return (
    <>
      <div className="container">
        <TodoHeading />
        <SetTodo onHandleClick={onHandleClick} />
        {todos.length === 0 ? <EmptyTodo /> : ""}
        <Todos
          todos={todos}
          onHandleDelete={onHandleDelete}
          setTodos={setTodos}
        />
      </div>
    </>
  );
}

export default App;
