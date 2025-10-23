import express from "express";
import todoRoutes from "./routes/todoRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request received: Method: ${req.method}, Path: ${req.path}`);
  next();
});

app.use("/api/toDoList", todoRoutes);
// here many many apis

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
});
