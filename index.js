import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import "./src/database/database.js";
import tareaRouter from "./src/routes/tareas.routes.js";

const app = express();
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.info("Estoy en el puerto " + app.get("port"));
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filaname = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filaname);

app.use(express.static(path.join(__dirname, "/public")));

app.use("/api", tareaRouter);
