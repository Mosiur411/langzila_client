import { Provider } from "react-redux";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import TodoList from "./Component/TodoList";
import store from "./redux/store";
import AllCompletedTodos from "./Component/AllCompletedTodos";
function Todo() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />

          <hr className="mt-4" />

          <TodoList />

          <hr className="mt-4" />

          <Footer />
        </div>
      </div>
      <div className="grid place-items-center p-8 bg-blue-100 px-6 font-sans">
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <h2 className="text-xl">Completed Todo List</h2>
          <AllCompletedTodos />
        </div>
      </div>
    </Provider>
  );
}

export default Todo;
