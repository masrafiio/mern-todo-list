import { useState } from "react";
import api from "../lib/axios";

const CreateTodoPage = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/toDoList", { title });
      window.location.href = "/";
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-base-200 rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Create New Todo
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter todo title..."
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button type="submit" className="btn btn-primary w-full">
            {"Add Todo"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateTodoPage;
