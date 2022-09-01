import { useState } from "react";
import { useDispatch } from "react-redux";
import deleteTodo from "../redux/todos/thunk/deleteTodo";
import updateColor from "../redux/todos/thunk/updateColor";
import updateStatus from "../redux/todos/thunk/updateStatus";
import EditTodo from "../redux/todos/thunk/EditTodo";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const { text, id, completed, color } = todo;
  const [editTextShow, setEditTextShow] = useState(false);
  const [inputText, setInputText] = useState(text);

  const handleStatusChange = (todoId) => {
    dispatch(updateStatus(todoId, completed));
  };

  const handleColorChange = (todoId, color) => {
    dispatch(updateColor(todoId, color));
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const showInputHandler = () => {
    setEditTextShow(true);
  };

  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(EditTodo(id, inputText));
    setEditTextShow(false);
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleStatusChange(id)}
          className="opacity-0 absolute rounded-full cursor-pointer"
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>
      <div className={`flex-1`}>
        {editTextShow ? (
          <form
            className="flex items-center bg-gray-100 rounded-md"
            onSubmit={submitHandler}
          >
            <input
              className="w-full text-lg px-4 border-none outline-none bg-gray-100 text-gray-500"
              value={inputText}
              onChange={handleInputTextChange}
            />
            <button
              type="submit"
              className={`appearance-none w-5 h-5 px-4 bg-[url('https://cdn-icons-png.flaticon.com/512/875/875068.png')] bg-no-repeat bg-contain`}
            ></button>
          </form>
        ) : (
          text
        )}
      </div>

      <div className="flex-shrink-0 h-5 w-5 ml-auto cursor-pointer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2951/2951136.png"
          alt=""
          onClick={showInputHandler}
        />
      </div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
          color === "green" && "bg-green-500"
        }`}
        onClick={() => handleColorChange(id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => handleColorChange(id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
          color === "red" && "bg-red-500"
        }`}
        onClick={() => handleColorChange(id, "red")}
      ></div>

      <img
        src="https://raw.githubusercontent.com/Learn-with-Sumit/think-in-a-redux-way/4.8/src/assets/images/cancel.png"
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}
