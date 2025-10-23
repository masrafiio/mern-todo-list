import express from "express";
import { getToDoList, getToDoListById, createToDoItem, updateToDoItem, deleteToDoItem } from "../controllers/todoControllers.js"

const router = express.Router();

router.get("/", getToDoList);
router.get("/:id", getToDoListById);
router.post("/", createToDoItem);
router.put("/:id", updateToDoItem);
router.delete("/:id", deleteToDoItem);

export default router;
