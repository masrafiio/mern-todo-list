import {
  PenSquareIcon,
  Trash2Icon,
  SquareCheckBig,
  Square,
} from "lucide-react";
import api from "../lib/axios";

const TodoCard = ({ todo, setTodos }) => {
  const toggleComplete = async (id) => {
    try {
      await api.put(`/toDoList/${id}`, { completed: !todo.completed }); // update backend
      setTodos((prev) =>
        prev.map((t) => (t._id === id ? { ...t, completed: !t.completed } : t))
      ); // update local state
    } catch (err) {
      console.error("Error toggling todo:", err);
    }
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    window.location.href = `/UpdateTodoPage/${id}`; // Navigate to edit page
  };

  const handleDelete = async (e, id) => {
    e.preventDefault(); // get rid of the navigation behaviour

    try {
      await api.delete(`/toDoList/${id}`);
      setTodos((prev) => prev.filter((todo) => todo._id !== id)); // get rid of the deleted one
    } catch (error) {
      console.log("Error in handleDelete", error);
    }
  };

  return (
    <div className="card bg-base-300 hover:shadow-lg transition-all duration-200">
      <div className="card-body py-2 px-2">
        <div className="card-actions justify-between">
          <div className="flex items-center justify-between">
            <button
              className="btn btn-ghost btn-sm text-success"
              onClick={() => toggleComplete(todo._id)}
            >
              {todo.completed ? (
                <SquareCheckBig className="size-4" />
              ) : (
                <Square className="size-4" />
              )}
            </button>
          </div>

          <p
            className={`flex-1 mx-3 text-base-content truncate ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.title}
          </p>

          <div className="flex items-center gap-3">
            <button
              className="btn btn-ghost btn-sm text-info"
              onClick={(e) => handleEdit(e, todo._id)}
            >
              <PenSquareIcon className="size-4" />
            </button>
            <button
              className="btn btn-ghost btn-sm text-error"
              onClick={(e) => handleDelete(e, todo._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
