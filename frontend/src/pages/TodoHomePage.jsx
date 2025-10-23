import Navbar from "../components/navbar";
import TodoCard from "../components/TodoCard";
import { useState } from "react";
import { useEffect } from "react";
import api from "../lib/axios";

const TodoHomePage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await api.get("/toDoList");
        setTodos(res.data);
      } catch (error) {
        console.log("Error fetching todos");
        console.log(error.response);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-3xl mx-auto px-12 py-12">
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <TodoCard key={todo._id} todo={todo} setTodos={setTodos} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TodoHomePage;
