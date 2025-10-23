import { Route, Routes } from "react-router";
import TodoHomePage from "./pages/TodoHomePage";
import CreateTodoPage from "./pages/CreateTodoPage";
import UpdateTodoPage from "./pages/UpdateTodoPage";

const App = () => {
  return (
    <div data-theme="coffee">
      <Routes>
        <Route path="/" element={<TodoHomePage />} />
        <Route path="/CreateTodoPage" element={<CreateTodoPage />} />
        <Route path="/UpdateTodoPage/:id" element={<UpdateTodoPage />} />
      </Routes>
    </div>
  );
};
export default App;
