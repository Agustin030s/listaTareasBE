import { Router } from "express";
import { crearTarea, listarTareas } from "../controllers/tareas.controllers.js";

const router = Router();

router.route("/tareas").post(crearTarea).get(listarTareas);

export default router;