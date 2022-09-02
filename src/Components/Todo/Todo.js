import { Provider } from "react-redux";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import TodoList from "./Component/TodoList";
import store from "./redux/store";
import AllCompletedTodos from "./Component/AllCompletedTodos";
import { useNavigate } from "react-router-dom";
import { BiCaretLeft } from "react-icons/bi";
function Todo() {
  const navigate = useNavigate()
  return (
    <Provider store={store}>

      <button onClick={() => navigate('/')} className=' z-50 border  bg-white flex items-center justify-center  px-2 pr-3 rounded text-black absolute left-5 top-5 hover:bg-red-500 hover:text-white font-medium'><BiCaretLeft className=' text-xl' />Back</button>
      <div className="grid place-items-center bg-blue-100 h-[60vh] pt-24 px-6 font-sans">
        <Navbar />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />

          <hr className="mt-4" />

          <TodoList />

          <hr className="mt-4" />

          <Footer />
        </div>
      </div>
      <div className="grid place-items-center p-8 pb-16 bg-blue-100 px-6 font-sans">
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <h2 className="text-xl">Completed Todo List</h2>
          <AllCompletedTodos />
        </div>
      </div>
    </Provider>
  );
}

export default Todo;
