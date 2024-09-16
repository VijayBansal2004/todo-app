import TodoHeading from "./components/TodoHeading";
import SetTodo from "./components/SetTodo";
import Todos from "./components/Todos";
import EmptyTodo from "./components/EmptyTodo";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "./components/SearchBar";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // const [searchedWord, setSearchedWord] = useState('');
  const [searchingTodoArray, setSearchingTodoArray] = useState([]);

  const handleSearch = (searchingTodo) => {
    if (typeof searchingTodo === "string") {
      const arr = todos.filter(todo => todo.text.toLowerCase().includes(searchingTodo.toLowerCase()))
      setSearchingTodoArray(arr);
    }
    // console.log(searchingTodoArray);
    searchingTodo.length === 0 && handlecloseSearch();
  }

  const handlecloseSearch = () => {
    setSearchingTodoArray([]);
  }

  const handleSearchedTodo = (id) => {
    let highlightedTodo = todos.filter((todo) => todo.id === id);
    highlightedTodo.classlist.add('highlightedTodo');
    setTimeout(() => {
      highlightedTodo.classlist.remove('highlightedTodo');
    }, 2000);
  }

  const onHandleClick = (inputText, inputDate) => {
    const newTodos = [
      {
        id: uuidv4(),
        text: inputText,
        date: inputDate,
      },
      ...todos,
    ];
    setTodos(newTodos);
  };

  const onHandleDelete = (id) => {
    const newTodoList = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodoList);
  };

  const onHandleEdit = (id, inputText, inputDate, isEditable, setIsEditable) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, text: inputText, date: inputDate } : todo
    )));
    setIsEditable(!isEditable);
  }

  return (
    <>
      <div className="container">
        <TodoHeading />
        <SearchBar handleSearch={handleSearch}
          searchingTodoArray={searchingTodoArray}
          handlecloseSearch={handlecloseSearch}
          handleSearchedTodo={handleSearchedTodo}
        />
        <SetTodo onHandleClick={onHandleClick} />
        {todos.length === 0 ? <EmptyTodo /> : ""}
        <Todos
          todos={todos}
          onHandleDelete={onHandleDelete}
          onHandleEdit={onHandleEdit}
          setTodos={setTodos}
        />
      </div>
    </>
  );
}

export default App;
