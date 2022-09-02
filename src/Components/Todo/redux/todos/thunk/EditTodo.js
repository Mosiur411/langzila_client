import { updateTodo } from "../actions";

const EditTodo = (todoId, todoText) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://lws-server-imran.herokuapp.com/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          text: todoText,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(updateTodo(todo.id, todo.text));
  };
};

export default EditTodo;
