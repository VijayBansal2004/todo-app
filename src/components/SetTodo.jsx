import { useRef } from "react";
import { IoAdd } from "react-icons/io5";
function SetTodo({ onHandleClick }) {
  const text = useRef();
  const date = useRef();

  const handleAddClick = () => {
    text.current.value.length !== 0 &&
      date.current.value.length !== 0 &&
      onHandleClick(text.current.value, date.current.value);
    text.current.value = "";
    date.current.value = "";
  };

  return (
    <>
      <div className="set-todo row d-flex justify-content-between align-content-center">
        <div className="col-5">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter Tast here"
            ref={text}
          />
        </div>
        <div className="col-4">
          <input type="date" name="date" id="date" ref={date} />
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              handleAddClick();
            }}
          >
            Add <IoAdd />
          </button>
        </div>
      </div>
    </>
  );
}
export default SetTodo;
