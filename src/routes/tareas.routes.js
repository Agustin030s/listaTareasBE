import { Router } from "express";
import { crearTarea } from "../controllers/tareas.controllers.js";

const router = Router();

router.route("/tareas").post(crearTarea);

export default router;