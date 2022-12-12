import express from "express";
import env from "dotenv";
import note_routes from "./routes/note_routes";
env.config();

// environtment variable
const { PORT } = process.env;

const app = express();

// middleware
app.use(express.json());

// route
app.use(note_routes);

// listener
app.listen(PORT, () => {
  console.log("server is running...");
});
