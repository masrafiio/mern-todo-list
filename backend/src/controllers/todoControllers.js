import Todo from "../models/todo.js";

export async function getToDoList(req, res) {
  try {
    const todos = await Todo.find().sort();
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error in getToDoList:", error);
    res.status(500).json({ message: "Error Fetching To Do List" });
  }
}

export async function getToDoListById(req, res) {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    console.error("Error in getToDoListById:", error);
    res.status(500).json({ message: "Error Fetching To Do Item" });
  }
}

export async function createToDoItem(req, res) {
  try {
    const {title} = req.body;
    const newTodo = new Todo({ title });
    await newTodo.save();
    res.status(201).json({ message: "To Do Item Created" });
  } catch (error) {
    console.error("Error in createToDoItem:", error);
    res.status(500).json({ message: "Error Creating To Do Item" });
  }
}

export async function updateToDoItem(req, res) {
  try {
    const { title, completed } = req.body;
    await Todo.findByIdAndUpdate(
      req.params.id,
      { title, completed },
      { new: true }
    );
    res.status(200).json({ message: "To Do Item Updated" });
  } catch (error) {
    console.error("Error in updateToDoItem:", error);
    res.status(500).json({ message: "Error Updating To Do Item" });
  }
}

export async function deleteToDoItem(req, res) {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "To Do Item Deleted" });
  } catch (error) {
    console.error("Error in deleteToDoItem:", error);
    res.status(500).json({ message: "Error Deleting To Do Item" });
  }
}
