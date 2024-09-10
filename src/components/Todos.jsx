import TodoItem from "./TodoItem";
function Todos({ todos, onHandleDelete, onHandleEdit, setTodos }) {
  return (
    <>
      {todos.map((i) => (
        <TodoItem
          key={i.id}
          text={i.text}
          date={i.date}
          id={i.id}
          onHandleDelete={onHandleDelete}
          onHandleEdit={onHandleEdit}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </>
  );
}
export default Todos;
