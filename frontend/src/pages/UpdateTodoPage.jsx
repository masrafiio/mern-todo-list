import { useState, useEffect } from "react";
import api from "../lib/axios";
import { useParams } from "react-router";

const UpdateTodoPage = () => {
  const [title, setTitle] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await api.get(`/toDoList/${id}`);
        setTitle(res.data.title); // ✅ set previous title
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };
    fetchTodo();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/toDoList/${id}`, { title });
      window.location.href = "/"; // redirect to home
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-base-200 rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">Update Todo</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button type="submit" className="btn btn-primary w-full">
            {"Update Todo"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default UpdateTodoPage;
