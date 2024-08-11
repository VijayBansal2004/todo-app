import TodoItem from "./TodoItem";
function Todos({ todos, onHandleDelete, setTodos }) {
  return (
    <>
      {todos.map((i) => (
        <TodoItem
          key={i.id}
          text={i.text}
          date={i.date}
          id={i.id}
          onHandleDelete={onHandleDelete}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </>
  );
}
export default Todos;
