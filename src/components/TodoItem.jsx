import { useState, useRef } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import { LiaSave } from "react-icons/lia";

function TodoItem({ text, date, id, onHandleDelete, onHandleEdit, todos, setTodos }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const editedText = useRef();
  const editedDate = useRef();

  const handleToggleEditButton = () => {
    setIsEditable(!isEditable);
  };

  return (
    <>
      <div
        id={id}
        className="todo row d-flex justify-content-between align-content-center my-3"
      >
        <div className="col-5 d-flex gap-3 align-items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <textarea
            name="text"
            className={`text-start m-0 ${isChecked && "lineThrough"} ${isEditable && "border border-2"
              }`}
            readOnly={!isEditable}
            rows={1}
            ref={editedText}
          >
            {text}
          </textarea>
        </div>
        <div className="col-4 align-content-center">
          <textarea
            name="text"
            className={`text-start m-0 ${isChecked && "lineThrough"} ${isEditable && "border border-2"
              }`}
            readOnly={!isEditable}
            rows={1}
            ref={editedDate}
          >
            {date}
          </textarea>
        </div>
        <div className="col-3 align-content-center">
          {isEditable ? (
            <button
              type="button"
              className="btn btn-light"
              onClick={() => {
                onHandleEdit(id, editedText.current.value, editedDate.current.value, isEditable, setIsEditable);
              }}
            >
              <LiaSave />
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-light"
              onClick={() => {
                handleToggleEditButton()
              }}
            >
              <FiEdit3 />
            </button>
          )}{" "}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              onHandleDelete(id);
            }}
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
